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

### commit

```bash
feat: something(#branch-name)
```

`feat`: `feat` | `fix` | `docs` | `style` | `refactor` | `perf` | `test` | `chore` | `revert`

`something`: 簡單描述你做了什麼事情

`branch-name`: 該隻 `branch` 的名字

對於 feat 不知道要填什麼的話，可參考[這篇文章](https://wadehuanglearning.blogspot.com/2019/05/commit-commit-commit-why-what-commit.html)

### 資料格式

```js
export type Data = {
  questionType: QuestionType;
  questionContent: Array<string | Array<string>>;
  answerContent: Array<string | Array<string>>;
  tag?: Array<Tag>;
  company?: Company | null;
};

```

`Content` 如果是 `Array<string>` 格式的話，代表中間要塞入一張圖片

```js
[
  {
    questionType: QuestionType.JavaScript,
    questionContent: ["我是內容", ["https://..."], "我是內容"],
    ...略,
  },
];
```

`Tag` 請參考 `@/types/tag`

`Company` 請參考 `@/types/company`
