function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const getRandomElements = (arr, limit) => {
    const newArr = shuffle(arr);
    return newArr.slice(0, Math.min(arr.length, limit));
};

const formatDateForm = (date) => {
    const monthName = [
        "Một",
        "Hai",
        "Ba",
        "Bốn",
        "Năm",
        "Sáu",
        "Bảy",
        "Tám",
        "Chín",
        "Mười",
        "Mười một",
        "Mười hai",
    ];

    // const monthName = [
    //     "Jan",
    //     "Feb",
    //     "Mar",
    //     "Apr",
    //     "May",
    //     "Jul",
    //     "Jun",
    //     "Aug",
    //     "Sep",
    //     "Oct",
    //     "Nov",
    //     "Dec",
    // ];

    const dateData = date.split("/");
    const formattedDateData = dateData.map((e, index) => {
        if (index !== 1 && e.length < 2) e = `0${e}`;

        return e;
    });

    return `Tháng ${monthName[formattedDateData[1]]} ${formattedDateData[0]}, ${
        formattedDateData[2]
    }`;
};

const dateConverter = (date) => {
    const d = new Date(date);
    const convertedDate = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
    return formatDateForm(convertedDate);
};

const encodeStr = (encodeStr) => {
    try {
        encodeStr = encodeStr.toString().toLowerCase().trim();
        encodeStr = encodeStr.replace(
            /à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,
            "a"
        );
        encodeStr = encodeStr.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ.+/g, "e");
        encodeStr = encodeStr.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        encodeStr = encodeStr.replace(
            /ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ.+/g,
            "o"
        );
        encodeStr = encodeStr.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        encodeStr = encodeStr.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        encodeStr = encodeStr.replace(/đ/g, "d");

        encodeStr = encodeStr.replace(/[^\w\s]/gi, "");
        encodeStr = encodeStr.replace(/\(|\)|\:/g, "");
        encodeStr = encodeStr.replace(/\//g, "-");
        encodeStr = encodeStr.replace(/^\-+|\-+$/g, "");
        encodeStr = encodeStr.replace(/ /g, "-");
        encodeStr = encodeStr.replace(/-+-/g, "-");

        return encodeStr;
    } catch (err) {
        return "";
    }
};

// const removeAccents = (str) => {
//     if (!str) {
//         return "";
//     }
//     return str
//         .toString()
//         .trim()
//         .normalize("NFD")
//         .replace(/[\u0300-\u036f]/g, "")
//         .toLowerCase()
//         .replace(/đ/g, "d")
//         .replace(/\//g, "-")
//         .replace(/ /g, "-");
// };

export { shuffle, getRandomElements, dateConverter, encodeStr };
