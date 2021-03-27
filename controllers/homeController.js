var courses = [
    {
        title: "Raspberry Cake",
        cost: 50
    },
    {
        title: "Artichoke",
        cost: 20
    },
    {
        title: "Burger",
        cost: 100
    },
]



exports.showCourses = (reg,res) => {
    res.render("courses", {offeredZCourses: courses});
}

exports.showSignup = (reg, res) => {
    res.render("contact")
}

exports.postedSignUpForm = (reg, res) => {
    res.render("thanks")
}

exports.showIndex = (reg,res) => {
    res.render("index");
}