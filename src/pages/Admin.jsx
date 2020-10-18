import React, { useEffect, useState } from "react";
import { Button, Input, Select } from "antd";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { dateConverter } from "../utils/helpers";
import axios from "../axios";

const { Option } = Select;

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const Admin = () => {
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState(null);
    const [formValue, setFormValue] = useState({
        title: "",
        shortDescription: "",
        image: "",
        category: "",
    });

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        const response = await axios.get("/categories.json");
        const data = response?.data;
        const categories = data && Object.values(data);
        setCategories(categories);
    };

    const handleChangeTextEditor = (value) => {
        const description = value.trim();
        setDescription(description);
    };

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        const modifiedValue = value.trim();
        if (modifiedValue && modifiedValue.length > 0) {
            setFormValue((v) => ({
                ...v,
                [name]: value,
            }));
        }
    };

    const handleChangeSelect = (value) =>
        setFormValue((v) => ({
            ...v,
            category: value,
        }));

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     const today = new Date();

    //     const data = {
    //         ...formValue,
    //         description: description,
    //         publishedAt: dateConverter(today),
    //     };
    //     await axios.post(`/posts.json`, data);
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const today = new Date();
        const categoryName = ["Ẩm thực", "Khám phá", "Mẹo"];

        [...Array(100)].forEach(async () => {
            const idx = Math.round(
                getRandomArbitrary(0, categoryName.length - 1)
            );
            const data = {
                ...formValue,
                description: description,
                category: categoryName[idx],
                image:
                    "https://video-blog.thimpress.com/wp-content/uploads/2019/01/6-1pexels-photo-1264210.jpeg",
                publishedAt: dateConverter(today),
            };
            await axios.post(`/posts.json`, data);
        });
    };

    const { title, shortDescription, image } = formValue;

    return (
        <section className="admin">
            <div className="container">
                <form className="admin-form">
                    <Input
                        placeholder="Title"
                        name="title"
                        value={title}
                        onChange={handleChangeInput}
                    ></Input>

                    <Input
                        placeholder="Short Description"
                        name="shortDescription"
                        value={shortDescription}
                        onChange={handleChangeInput}
                    ></Input>

                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <Select
                            id="category"
                            style={{ width: 120 }}
                            onChange={handleChangeSelect}
                        >
                            {categories &&
                                categories.length > 0 &&
                                categories.map((category, idx) => (
                                    <Option value={category.name}>
                                        {category && category.name}
                                    </Option>
                                ))}
                        </Select>
                    </div>

                    <Input
                        placeholder="Post image"
                        name="image"
                        value={image}
                        // onChange={handleChangeInput}
                    ></Input>

                    <CKEditor
                        editor={ClassicEditor}
                        data={description}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            handleChangeTextEditor(data);
                        }}
                    />

                    <Button type="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default Admin;

//  const handleSubmit = async (event) => {
//      event.preventDefault();
//      const today = new Date();
//      const categoryName = ["Ẩm thực", "Khám phá", "Mẹo"];
//      const idx = Math.round(getRandomArbitrary(0, categories.length));
//      // console.log("dateConverter(today)", dateConverter(today));

//      [...Array(100)].forEach(async () => {
//          const data = {
//              ...formValue,
//              description: description,
//              image:
//                  'https://video-blog.thimpress.com/wp-content/uploads/2019/01/video-detail-02.jpg',
//              publishedAt: dateConverter(today),
//          };
//          await axios.post(`/posts.json`, data);
//      });
//  };
