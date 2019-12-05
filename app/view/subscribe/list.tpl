<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>全部标签</title>
</head>
<body>
    <!-- {{articles}} -->
    {% for item in tags %}
    <div>
        <img src="{{item.image}}" alt="">
    </div>
    <div>{{item.name}}</div>
    <div>
        <span>{{item.subscribe}}</span>关注
        <span>{{item.articles}}</span>文章
    </div>
    {% endfor %}
</body>
</html>