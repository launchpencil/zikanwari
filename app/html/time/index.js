console.log("hello");
fetch(`https://zikanwari.f5.si/api/all.php`)
.then(response => {
    if( !res.status === 200 ) {
        document.getElementById('timetable').innerText= 'エラーが発生しました。エラーコード：' + response.status;
        exit;
    }
})
.then(data => {
    a = data.split(',');
    a.pop();
    for (let index = 0; index < a.length; index++) {
        document.getElementById(index).innerText = a[index];
    }
});