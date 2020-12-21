const firstLetter = [
    {
        tv: "s",
        tk: "S"
    },
    {
        tv: "t",
        tk: "T"
    },
    {
        tv: "k",
        tk: "K"
    },
    {
        tv: "v",
        tk: "K"
    },
    {
        tv: "h",
        tk: "H"
    },
    {
        tv: "r",
        tk: "R"
    },
    {
        tv: "b",
        tk: "P"
    },
    {
        tv: "th",
        tk: "TH"
    },
    {
        tv: "kh",
        tk: "KH"
    },
    {
        tv: "ph",
        tk: "PH"
    },
    {
        tv: "tr",
        tk: "TR"
    },
    {
        tv: "ng",
        tk: "KR"
    },
    {
        tv: "ngh",
        tk: "KR"
    },
    {
        tv: "g",
        tk: "KP"
    },
    {
        tv: "gi",
        tk: "SH"
    },
    {
        tv: "d",
        tk: "SP"
    },
    {
        tv: "n",
        tk: "PR"
    },
    {
        tv: "l",
        tk: "SR"
    },
    {
        tv: "ch",
        tk: "SK"
    },
    {
        tv: "nh",
        tk: "TK"
    },
    {
        tv: "d",
        tk: "SP"
    },
    {
        tv: "n",
        tk: "PR"
    },
    {
        tv: "m",
        tk: "PH"
    },
    {
        tv: "q",
        tk: "SPH"
    },
    {
        tv: "v",
        tk: "SPR"
    },
    {
        tv: "p",
        tk: "STK"
    },

]


const midLetterWithThanh = [
    {
        tv: "à",
        tk: "HA"
    },
    {
        tv: "á",
        tk: "SA"
    },

    {
        tv: "ạ",
        tk: "NA"
    },
    {
        tv: "ă",
        tk: "NSA"
    },
    {
        tv: "ằ",
        tk: "H*A"
    },

    {
        tv: "ắ",
        tk: "S*A"
    },
    {
        tv: "ặ",
        tk: "N*A"
    },
    {
        tv: "ẵ",
        tk: "NS*A"
    },
    {
        tv: "ò",
        tk: "HO"
    },

    {
        tv: "ó",
        tk: "SO"
    },
    {
        tv: "ọ",
        tk: "NO"
    },
    {
        tv: "õ",
        tk: "NSO"
    },
    {
        tv: "ỏ",
        tk: "HSO"
    },
    {
        tv: "è",
        tk: "HE"
    },
    {
        tv: "é",
        tk: "SE"
    },
    {
        tv: "ẹ",
        tk: "NE"
    },
    {
        tv: "ẽ",
        tk: "NSE"
    },
    {
        tv: "ẻ",
        tk: "HSE"
    },
    {
        tv: "p",
        tk: "STK"
    },
    {
        tv: "p",
        tk: "STK"
    },
    {
        tv: "p",
        tk: "STK"
    },
]
const midLetterNguyenAmNganKhongThanh = [
    {
        tv: "i",
        tk: "*I"
    },
    {
        tv: "e",
        tk: "*E"
    },
    {
        tv: "a",
        tk: "*A"
    },
    {
        tv: "o",
        tk: "*O"
    },
    {
        tv: "ơ",
        tk: "*W"
    },

    {
        tv: "ê",
        tk: "OE"
    },
    {
        tv: "ư",
        tk: "UW"
    },
    {
        tv: "ơ",
        tk: "W"
    },
    {
        tv: "u",
        tk: "IU"
    },
    {
        tv: "ô",
        tk: "OW"
    },

]
const nguyenAmDemNguyenAm = [
    {
        tv: "oa/ua",
        tk: "U"
    },
    {
        tv: "oă",
        tk: "*U"
    },
    {
        tv: "oe/ue",
        tk: "AY"
    },
    {
        tv: "uyê/uya",
        tk: "EY"
    },
    {
        tv: "ươ",
        tk: "Y"
    },
    {
        tv: "uâ",
        tk: "*Y"
    },
    {
        tv: "uy",
        tk: "UY"
    },
    {
        tv: "uê",
        tk: "UE"
    },
    {
        tv: "oá",
        tk: "-SU"
    },
    {
        tv: "oè ",
        tk: "-HAY"
    },
    {
        tv: "oé ",
        tk: "-SAY"
    },
    {
        tv: "oò ",
        tk: "-H*O"
    },
    {
        tv: "oằ ",
        tk: "-H*U"
    }, {
        tv: "oẳ ",
        tk: "-HS*U"
    }, {
        tv: "oẵ ",
        tk: "-N*-U"
    },




]

const nguyenAmCuoi = [
    {
        tv: "n",
        tk: "N"
    },
    {
        tv: "o",
        tk: "-JK"
    },
    {
        tv: "i",
        tk: "-J"
    },
    {
        tv: "y",
        tk: "-JN"
    },
    {
        tv: "c",
        tk: "-NK"
    },
    {
        tv: "ch",
        tk: "-GK"
    },
    {
        tv: "p",
        tk: "-TK"
    },
    {
        tv: "t",
        tk: "-NT"
    },
    {
        tv: "ng",
        tk: "-G"
    },
    {
        tv: "nh",
        tk: "-K"
    },
    {
        tv: "m",
        tk: "-T"
    },

]
const number = [
    {
        tv: "1",
        tk: "#S"
    },
    {
        tv: "2",
        tk: "#K-"
    },
    {
        tv: "3",
        tk: "#R-"
    },
    {
        tv: "4",
        tk: "#N-"
    },
    {
        tv: "5",
        tk: "#-H"
    },
    {
        tv: "6",
        tk: "#-W"
    },
    {
        tv: "7",
        tk: "#-J"
    },
    {
        tv: "8",
        tk: "#-N"
    },
    {
        tv: "9",
        tk: "#-T"
    },
    {
        tv: "0",
        tk: "#O"
    },
    {
        tv: "-1",
        tk: "#T-"
    },
    {
        tv: "-2",
        tk: "#P-"
    },
    {
        tv: "-3",
        tk: "#H-"
    },
    {
        tv: "-4",
        tk: "#-S"
    },
    {
        tv: "-5",
        tk: "#-I"
    },
    {
        tv: "-6",
        tk: "#-Y"
    },
    {
        tv: "-7",
        tk: "#-G"
    },
    {
        tv: "-8",
        tk: "#-K"
    },
    {
        tv: "-9",
        tk: "#-E"
    },

]
