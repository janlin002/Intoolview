# 怎麼發起 PR?

### env

```bash
node > v.18
```

### branch

```bash
name-number

ex. jan-01, jan-02, ...
```

基本格式如下：

```js
[
    {
        questionTitle: string,
        questionContent: Array<string | Array<string>>,
        answerContent: Array<string | Array<string>>,
        tag: Tag,
        company: Company | null
    }
]
```

`content` 如果是 `Array<string>` 格式的話，代表中間要塞入一張圖片

```js
[
  {
    questionTitle: "什麼是 Hoisting",
    questionContent: ["我是內容", ["http://..."], "我是內容"],
    ...略,
  },
];
```

`Tag` 請參考 `@/types/tag`

`Company` 請參考 `@/types/company`
