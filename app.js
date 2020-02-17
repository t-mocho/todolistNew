// 出力
const addBtn = document.getElementById('inBtn');
const todos = [];
const addTask = document.getElementById('task-list');
// ボタン押下で追加
addBtn.onclick = function() {
  const addText = document.getElementById('inArea');
  todos.push(addText.value);

  // 空文字は入力値スルー
  if (addText.value !== "") {
    // li作成
    var addLi = document.createElement('li');
    for (var i = 0; i < todos.length; i++) {
      addLi.innerHTML = todos[i];
      document.getElementById('task-list').appendChild(addLi);
    }
    // アイコン追加
    addLi.insertAdjacentHTML('afterbegin', '<i class="material-icons add">favorite</i>');
    addLi.insertAdjacentHTML('beforeend', '<i class="material-icons del">delete</i>');
  }
  // 入力値リセット
  addText.value = "";
}

// 削除
const delList = document.getElementById('task-list');
delList.addEventListener('click', (e) => {
  let target = e.target;
  const delBtn = document.getElementsByClassName('material-icons del');
  for (var i = 0; i < delBtn.length; i++) {
    if (target === delBtn[i]) {
      const delList = target.parentNode;
      delList.style.transform = "translateX(150px)";
      delList.style.opacity = "0";
      delList.style.transition = ".9s";
      setTimeout(function() {
        delList.style.display = "none";
      }, 800);
    }
  }
});

// 完了
document.getElementById('task-list').addEventListener('click', (e) => {
  let target = e.target;
  const endLi = document.getElementsByTagName('li');
  const endImg = document.getElementsByClassName('material-icons add');
  for (var i = 0; i < endImg.length; i++) {
    if (target === endImg[i]) {
      target.classList.toggle('end');
    }
  }
});
