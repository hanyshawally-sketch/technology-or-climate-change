


function showProjectMessage() {

    let message = document.getElementById("message");

    message.textContent =
        "التكنولوجيا تصبح أكثر فائدة عندما نستخدمها لخدمة الإنسان والبيئة.";

    console.log("تم تشغيل وظيفة رسالة المشروع");
}



let startButton = document.getElementById("startButton");

startButton.addEventListener("click", function () {

    showProjectMessage();

});




let technologyUsed = true;

if (technologyUsed == true) {

    console.log("يمكن استخدام التكنولوجيا للمساعدة في مواجهة التغيرات المناخية و الحذر منها.");

} else {

    console.log("يجب الاهتمام باستخدام التكنولوجيا.");

}





let climateSolutions = [
    "الطاقة الشمسية",
    "الأقمار الصناعية",
    "الزراعة الذكية",
    "أنظمة الإنذار المبكر"
];

for (let i = 0; i < climateSolutions.length; i++) {

    console.log(
        "حل تكنولوجي رقم " + (i + 1) +
        ": " + climateSolutions[i]
    );

}


