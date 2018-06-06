
##CSS 상속, 우선 순위

```
<!-- inline css -->
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Document</title>
</head>
<body style="color:blue;font-size:15px;">
  <div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  <div></div>
  <div></div>
</body>
</html>


<!-- internal css -->
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Document</title>
  <style>
    body {
      background-color: linen;
    }

    h1 {
      color: maroon;
      margin-left: 40px;
    }
  </style>
</head>
<body>

</body>
</html>

<!-- external css -->
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" type="text/css" href="mystyle.css">
  <title>Document</title>
</head>
<body>

</body>
</html>
```

**Tip1 : inline > internal > external**

**Tip2 : css 는 개인적으로 잘 만들어진 언어라고 생각하진 않습니다. 제 생각에 css 는 property 잘 사용되는것들 몇개만 쓱 훓고 layout 잡는 것 연습하신다음 바로 scss 사용하길 권장합니다**
