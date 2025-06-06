```yaml
title:
  zh-CN: 分组表头
  en-US: Column Group
```

## zh-CN

`columns` 内可以设置 `children`，用于表头分组。

---

## en-US

`Children` can be set in `columns` for header grouping.

---

```vue
<template>
  <a-table :columns="columns" :data="data" :bordered="{ headerCell: true }" />
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        fixed: 'left',
        width: 140,
      },
      {
        title: 'User Info',
        children: [
          {
            title: 'Birthday',
            dataIndex: 'birthday',
          },
          {
            title: 'Address',
            children: [
              {
                title: 'City',
                dataIndex: 'city',
              },
              {
                title: 'Road',
                dataIndex: 'road',
              },
              {
                title: 'No.',
                dataIndex: 'no',
              },
            ],
          },
        ],
      },
      {
        title: 'Information',
        children: [
          {
            title: 'Email',
            dataIndex: 'email',
          },
          {
            title: 'Phone',
            dataIndex: 'phone',
          },
        ],
      },
      {
        title: 'Salary',
        dataIndex: 'salary',
        fixed: 'right',
        width: 120,
      },
    ];
    const data = reactive([
      {
        key: '1',
        name: 'Jane Doe',
        salary: 23000,
        birthday: '1994-04-21',
        city: 'London',
        road: 'Park',
        no: '34',
        phone: '12345678',
        email: 'jane.doe@example.com',
      },
      {
        key: '2',
        name: 'Alisa Ross',
        salary: 25000,
        birthday: '1994-05-21',
        city: 'London',
        road: 'Park',
        no: '37',
        phone: '12345678',
        email: 'alisa.ross@example.com',
      },
      {
        key: '3',
        name: 'Kevin Sandra',
        salary: 22000,
        birthday: '1992-02-11',
        city: 'Paris',
        road: 'Arco',
        no: '67',
        phone: '12345678',
        email: 'kevin.sandra@example.com',
      },
      {
        key: '4',
        name: 'Ed Hellen',
        salary: 17000,
        birthday: '1991-06-21',
        city: 'London',
        road: 'Park',
        no: '317',
        phone: '12345678',
        email: 'ed.hellen@example.com',
      },
      {
        key: '5',
        name: 'William Smith',
        salary: 27000,
        birthday: '1996-08-21',
        city: 'Paris',
        road: 'Park',
        no: '114',
        phone: '12345678',
        email: 'william.smith@example.com',
      },
    ]);

    return {
      columns,
      data,
    };
  },
};
</script>
```
