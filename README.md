# 素のJSでTODOLISTつくってみた！めも

## リストの追加削除

### 追加
[]で配列作成してforで回してinnerHTMLで引数とって追加処理
`getElementById` でCSSのidとる、一意のみ  
`getElementsByClassName` はHTMLコレクション（配列風）だからforで回してclassとる

### 削除  
ゴミ箱アイコンクリックでイベント発火  
`event.target` でクリックした箇所の引数とった  
`element.parentNode` これでliの親要素取って削除  
・・`classList.add`でクラス与えようとしたら反映されなかったので
 `style.css種類` とかを使って後付けした・・ハマッタ・・・

### 完了 
シンプルにハートアイコンクリックで色変更  
同じくtargetでクリックした箇所のliをとってきてtoggleでclass変更  
色変えるだけなのでカンタン



## アニメーション

### 追加  
CSSでアニメーション追加  
keyframesつかって右から左へフェードイン  
楽・・・・

### 削除
とてもはまった
`classList.add` が使えないという沼に浸かった  
`style.opacity` で対応したけど腑に落ちない・・なぜだ
