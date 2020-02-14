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
document.getElementById('task-list').addEventListener('click', (e) => {
  let target = e.target;
  const delBtn = document.getElementsByClassName('material-icons del');
  for (var i = 0; i < delBtn.length; i++) {
    if (target === delBtn[i]) {
      target.parentElement.remove();
    }
  }
});
