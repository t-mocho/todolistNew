// todolist
var todos = [{
  task: addtext,
  done: false
}];
// 0番目削除
todos.shift();

// id
const tasklist = document.getElementById('tasklist');

// 追加
const addbtn = document.getElementById('addbtn');
addbtn.onclick = function() {
  const text = document.getElementById('addtext').value;
  const todo = {};
  if (text) {
    // 値更新
    todo.task = text;
    todo.done = false;
    // 配列追加
    todos.push(todo);
    // 書き出し'
    addtodo(todos);
    // 入力値リセット
    let re = document.getElementById('addtext');
    re.value = "";
  }
};

// 書き出し関数
function addtodo(todos) {
  // li作成
  var newli = document.createElement('li');
  // todosの配列を1つずつとる
  for (let i in todos) {
    var addlist = todos[i].task;
  }
  // HTMLに書き出し
  newli.insertAdjacentHTML('afterbegin', '<i class="material-icons add">favorite</i>');
  newli.appendChild(document.createTextNode(addlist));
  newli.insertAdjacentHTML('beforeend', '<i class="material-icons del">delete</i>');
  tasklist.appendChild(newli);
};

// 完了
tasklist.addEventListener('click', (e) => {
  let target = e.target;
  // addのみ処理を行う
  if (target.classList.contains('add')) {
    for (var i = 0; i < todos.length; i++) {
      // ハートクリックでtoggle
      const icon = document.getElementsByClassName('material-icons add');
      if (target === icon[i]) {
        target.classList.toggle('end');
        // done変更
        todos[i].done = !todos[i].done;
      }
    }
  }
  console.log(todos);
});

// 削除
tasklist.addEventListener('click', (e) => {
  let target = e.target;
  // delのみ処理を行う
  if (target.classList.contains('del')) {
    target.parentElement.remove();
    for (var i = 0; i < todos.length; i++) {
      delete todos[i];
    }
  }
});
