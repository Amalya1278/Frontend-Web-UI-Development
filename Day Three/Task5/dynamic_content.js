
var tabContent = {
    tab1: "<p>Tab1 content</p>",
    tab2: "<p>Tab2 content</p>",
    tab3: "<p>Tab3 content</p>"
};


function tabcontent(tabName) {
    document.getElementById('tabContent').innerHTML = tabContent[tabName];
}