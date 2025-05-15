```yaml
meta:
  type: Component
  category: Data Entry
title: TimePicker
description: Select the time on the pop-up panel to conveniently complete the time input control.
```

@import ./**demo**/basic.md

@import ./**demo**/rangepicker.md

@import ./**demo**/control.md

@import ./**demo**/default-value.md

@import ./**demo**/size.md

@import ./**demo**/disabled.md

@import ./**demo**/disabled-time.md

@import ./**demo**/disable-confirm.md

@import ./**demo**/format.md

@import ./**demo**/step.md

@import ./**demo**/extra.md

@import ./**demo**/use-12-hours.md

## API

### `<TimePicker>` Props

|Attribute|Description|Type|Default|
|---|---|---|---|
|type|Selector type|`'time' \| 'time-range'`|`'time'`|
|model-value **(v-model)**|Value|`string \| number \| Date \| Array<string \| number \| Date>`|`-`|
|default-value|Default value|`string \| number \| Date \| Array<string \| number \| Date>`|`-`|
|disabled|Whether to disable|`boolean`|`-`|
|allow-clear|Whether to allow clear|`boolean`|`true`|
|readonly|Whether it is read-only mode|`boolean`|`-`|
|error|Whether it is an error state|`boolean`|`-`|
|format|Display the format of the date, refer to [String Parsing Format](#String Parsing Format)|`string`|`'HH:mm:ss'`|
|placeholder|Prompt copy|`string \| string[]`|`-`|
|size|Input box size|`'mini' \| 'small' \| 'medium' \| 'large'`|`'medium'`|
|popup-container|Mount container for pop-up box|`string \| HTMLElement`|`-`|
|use12-hours|12 hour clock|`boolean`|`-`|
|step|Set the hour/minute/second selection interval|`{   hour?: number;   minute?: number;   second?: number; }`|`-`|
|disabled-hours|Disabled partial hour options|`() => number[]`|`-`|
|disabled-minutes|Disabled some minutes options|`(selectedHour?: number) => number[]`|`-`|
|disabled-seconds|Disabled partial seconds option|`(selectedHour?: number, selectedMinute?: number) => number[]`|`-`|
|hide-disabled-options|Hide prohibited options|`boolean`|`-`|
|disable-confirm|Disable the confirmation step, click the time directly after opening, without clicking the confirmation button|`boolean`|`-`|
|position|Pop-up position|`'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br'`|`'bl'`|
|popup-visible **(v-model)**|Control the pop-up box to open or close|`boolean`|`-`|
|default-popup-visible|The pop-up box is opened or closed by default|`boolean`|`false`|
|trigger-props|You can pass in the parameters of the `Trigger` component|`TriggerProps`|`-`|
|unmount-on-close|Whether to destroy the dom structure after closing|`boolean`|`-`|

## zh-CN

### 字符串解析格式

| 格式   | 输出             |                         描述 |
| ------ | ---------------- | ---------------------------: |
| `YY`   | 21               |                 两位数的年份 |
| `YYYY` | 2021             |                   四位数年份 |
| `M`    | 1-12             |              月份，从 1 开始 |
| `MM`   | 01-12            |                 月份，两位数 |
| `MMM`  | Jan-Dec          |               缩写的月份名称 |
| `MMMM` | January-December |               完整的月份名称 |
| `D`    | 1-31             |                 月份里的一天 |
| `DD`   | 01-31            |         月份里的一天，两位数 |
| `d`    | 0-6              |     一周中的一天，星期天是 0 |
| `dd`   | Su-Sa            |     最简写的一周中一天的名称 |
| `ddd`  | Sun-Sat          |       简写的一周中一天的名称 |
| `dddd` | Sunday-Saturday  |             一周中一天的名称 |
| `H`    | 0-23             |                         小时 |
| `HH`   | 00-23            |                 小时，两位数 |
| `h`    | 1-12             |              小时, 12 小时制 |
| `hh`   | 01-12            |      小时, 12 小时制, 两位数 |
| `m`    | 0-59             |                         分钟 |
| `mm`   | 00-59            |                 分钟，两位数 |
| `s`    | 0-59             |                           秒 |
| `ss`   | 00-59            |                   秒，两位数 |
| `S`    | 0-9              |             数百毫秒，一位数 |
| `SS`   | 00-99            |             几十毫秒，两位数 |
| `SSS`  | 000-999          |               毫秒，三位数字 |
| `Z`    | -5:00            |                 UTC 的偏移量 |
| `ZZ`   | -0500            | UTC 的偏移量，数字前面加上 0 |
| `A`    | AM PM            |                            - |
| `a`    | am pm            |                            - |
| `Do`   | 1st... 3st       |         带序号的月份中的某天 |
| `X`    | 1410715640.579   |                  Unix 时间戳 |
| `x`    | 1410715640579    |              Unix 毫秒时间戳 |

---

## en-US

### String parsing format

| Format | Output           |                              Description |
| ------ | ---------------- | ---------------------------------------: |
| `YY`   | 21               |                           Two-digit year |
| `YYYY` | 2021             |                          Four-digit year |
| `M`    | 1-12             |                   Month, starting from 1 |
| `MM`   | 01-12            |                        Month, two digits |
| `MMM`  | Jan-Dec          |                   Abbreviated month name |
| `MMMM` | January-December |                          Full month name |
| `D`    | 1-31             |                         Day of the month |
| `DD`   | 01-31            |             Day of the month, two digits |
| `d`    | 0-6              |             Day of the week, Sunday is 0 |
| `dd`   | Su-Sa            | The shortest name of the day of the week |
| `ddd`  | Sun-Sat          |  Abbreviated name of the day of the week |
| `dddd` | Sunday-Saturday  |          The name of the day of the week |
| `H`    | 0-23             |                                     Hour |
| `HH`   | 00-23            |                         Hour, two digits |
| `h`    | 1-12             |                      Hour, 12-hour clock |
| `hh`   | 01-12            |          Hour, 12-hour clock, two digits |
| `m`    | 0-59             |                                   Minute |
| `mm`   | 00-59            |                       Minute, two digits |
| `s`    | 0-59             |                                   Second |
| `ss`   | 00-59            |                       Second, two digits |
| `S`    | 0-9              |     Hundreds of milliseconds, one digits |
| `SS`   | 00-99            |         Tens of milliseconds, two digits |
| `SSS`  | 000-999          |                Millisecond, three digits |
| `Z`    | -5:00            |                               UTC offset |
| `ZZ`   | -0500            | UTC offset, add 0 in front of the number |
| `A`    | AM PM            |                                        - |
| `a`    | am pm            |                                        - |
| `Do`   | 1st... 3st       |          Day of month with serial number |
| `X`    | 1410715640.579   |                           Unix timestamp |
| `x`    | 1410715640579    |               Unix millisecond timestamp |

---