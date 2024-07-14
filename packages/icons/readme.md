# Web Component 图标库

为 [@swc-ui/components](https://github.com/WebJeffery/stencil-component-ui) Web Component 组件库封装的图标库


## 安装

选择一个你喜欢的包管理器安装

```bash
# NPM
$ npm install @swc-ui/icons

# Yarn
$ yarn add @swc-ui/icons

# pnpm
$ pnpm install @swc-ui/icons
```

## 注册使用

1、批量一次性引入所有图标注册

```js
// 全量引入
import { defineCustomElements} from '@swc-ui/icons'
defineCustomElements()

```

2、按需引入图标注册【推荐】

```js
// 按需引入，自动注册
import '@swc-ui/icons/dist/components/swc-icon-add-location.js'
```

像普通 html 标签一样使用
```html
<swc-icon-add-location></swc-icon-add-location>
```

## 基础用法

通过设置 `name` 来使用其他图标

```html
<!-- 使用 swc-icon 为 SVG 图标提供属性 -->
<swc-icon name="edit" color="red"></swc-icon>

<!-- 或者独立使用它，不从父级获取属性 -->
<swc-icon-edit></swc-icon-edit>
```

## 倾斜 rotate

通过`rotate`倾斜 icon 角度

```html
<swc-icon name="edit" rotate="30"></swc-icon>
<swc-icon name="reading" rotate="60"></swc-icon>
```

## 旋转

添加`spin`属性来使 icon 旋转

```html
<swc-icon name="loading" spin></swc-icon>
<swc-icon name="refresh-right" spin></swc-icon>
<swc-icon name="refresh" spin></swc-icon>
```

## 大小

添加`size`属性来设置大小

```html
<swc-icon name="loading" size="16"></swc-icon>
<swc-icon name="loading"></swc-icon>
<swc-icon name="loading" size="24"></swc-icon>
<swc-icon name="loading" size="30"></swc-icon>
<swc-icon name="loading" size="36"></swc-icon>
```

## 颜色

添加`color`属性来设置颜色

```html
<swc-icon name="loading"></swc-icon>
<swc-icon name="loading" color="red"></swc-icon>
<swc-icon name="loading" color="blue"></swc-icon>
<swc-icon name="loading" color="pink"></swc-icon>
<swc-icon name="loading" color="green"></swc-icon>
```

## Attrs

| 属性名   | 说明   |类型| 可选值       | 默认值    |
|-------|------|-|-----------|--------|
| name  | 图标名称 |`string`| @swc-ui/icons 图标 | - |
| rotate  | 图标旋转角度 |`number`| 0 | - |
| spin  | 360度旋转 |`boolean`| `true`、`false` | `false` |
| size  | 图标大小 |`string`| 合法的 css 单位 | `1em` |
| color | 图标颜色 |`string`| 合法的颜色值    | -      |

## 所有 icon

```html
<swc-icon-add-location></swc-icon-add-location>
<swc-icon-aim></swc-icon-aim>
<swc-icon-alarm-clock></swc-icon-alarm-clock>
<swc-icon-apple></swc-icon-apple>
<swc-icon-arrow-down-bold></swc-icon-arrow-down-bold>
<swc-icon-arrow-down></swc-icon-arrow-down>
<swc-icon-arrow-left-bold></swc-icon-arrow-left-bold>
<swc-icon-arrow-left></swc-icon-arrow-left>
<swc-icon-arrow-right-bold></swc-icon-arrow-right-bold>
<swc-icon-arrow-right></swc-icon-arrow-right>
<swc-icon-arrow-up-bold></swc-icon-arrow-up-bold>
<swc-icon-arrow-up></swc-icon-arrow-up>
<swc-icon-avatar></swc-icon-avatar>
<swc-icon-back></swc-icon-back>
<swc-icon-baseball></swc-icon-baseball>
<swc-icon-basketball></swc-icon-basketball>
<swc-icon-bell-filled></swc-icon-bell-filled>
<swc-icon-bell></swc-icon-bell>
<swc-icon-bicycle></swc-icon-bicycle>
<swc-icon-bottom-left></swc-icon-bottom-left>
<swc-icon-bottom-right></swc-icon-bottom-right>
<swc-icon-bottom></swc-icon-bottom>
<swc-icon-bowl></swc-icon-bowl>
<swc-icon-box></swc-icon-box>
<swc-icon-briefcase></swc-icon-briefcase>
<swc-icon-brush-filled></swc-icon-brush-filled>
<swc-icon-brush></swc-icon-brush>
<swc-icon-burger></swc-icon-burger>
<swc-icon-calendar></swc-icon-calendar>
<swc-icon-camera-filled></swc-icon-camera-filled>
<swc-icon-camera></swc-icon-camera>
<swc-icon-caret-bottom></swc-icon-caret-bottom>
<swc-icon-caret-left></swc-icon-caret-left>
<swc-icon-caret-right></swc-icon-caret-right>
<swc-icon-caret-top></swc-icon-caret-top>
<swc-icon-cellphone></swc-icon-cellphone>
<swc-icon-chat-dot-round></swc-icon-chat-dot-round>
<swc-icon-chat-dot-square></swc-icon-chat-dot-square>
<swc-icon-chat-line-round></swc-icon-chat-line-round>
<swc-icon-chat-line-square></swc-icon-chat-line-square>
<swc-icon-chat-round></swc-icon-chat-round>
<swc-icon-chat-square></swc-icon-chat-square>
<swc-icon-check></swc-icon-check>
<swc-icon-checked></swc-icon-checked>
<swc-icon-cherry></swc-icon-cherry>
<swc-icon-chicken></swc-icon-chicken>
<swc-icon-chrome-filled></swc-icon-chrome-filled>
<swc-icon-circle-check-filled></swc-icon-circle-check-filled>
<swc-icon-circle-check></swc-icon-circle-check>
<swc-icon-circle-close-filled></swc-icon-circle-close-filled>
<swc-icon-circle-close></swc-icon-circle-close>
<swc-icon-circle-plus-filled></swc-icon-circle-plus-filled>
<swc-icon-circle-plus></swc-icon-circle-plus>
<swc-icon-clock></swc-icon-clock>
<swc-icon-close-bold></swc-icon-close-bold>
<swc-icon-close></swc-icon-close>
<swc-icon-cloudy></swc-icon-cloudy>
<swc-icon-coffee-cup></swc-icon-coffee-cup>
<swc-icon-coffee></swc-icon-coffee>
<swc-icon-coin></swc-icon-coin>
<swc-icon-cold-drink></swc-icon-cold-drink>
<swc-icon-collection-tag></swc-icon-collection-tag>
<swc-icon-collection></swc-icon-collection>
<swc-icon-comment></swc-icon-comment>
<swc-icon-compass></swc-icon-compass>
<swc-icon-connection></swc-icon-connection>
<swc-icon-coordinate></swc-icon-coordinate>
<swc-icon-copy-document></swc-icon-copy-document>
<swc-icon-cpu></swc-icon-cpu>
<swc-icon-credit-card></swc-icon-credit-card>
<swc-icon-crop></swc-icon-crop>
<swc-icon-d-arrow-left></swc-icon-d-arrow-left>
<swc-icon-d-arrow-right></swc-icon-d-arrow-right>
<swc-icon-d-caret></swc-icon-d-caret>
<swc-icon-data-analysis></swc-icon-data-analysis>
<swc-icon-data-board></swc-icon-data-board>
<swc-icon-data-line></swc-icon-data-line>
<swc-icon-delete-filled></swc-icon-delete-filled>
<swc-icon-delete-location></swc-icon-delete-location>
<swc-icon-delete></swc-icon-delete>
<swc-icon-dessert></swc-icon-dessert>
<swc-icon-discount></swc-icon-discount>
<swc-icon-dish-dot></swc-icon-dish-dot>
<swc-icon-dish></swc-icon-dish>
<swc-icon-document-add></swc-icon-document-add>
<swc-icon-document-checked></swc-icon-document-checked>
<swc-icon-document-copy></swc-icon-document-copy>
<swc-icon-document-delete></swc-icon-document-delete>
<swc-icon-document-remove></swc-icon-document-remove>
<swc-icon-document></swc-icon-document>
<swc-icon-download></swc-icon-download>
<swc-icon-drizzling></swc-icon-drizzling>
<swc-icon-edit-pen></swc-icon-edit-pen>
<swc-icon-edit></swc-icon-edit>
<swc-icon-eleme-filled></swc-icon-eleme-filled>
<swc-icon-eleme></swc-icon-eleme>
<swc-icon-element-plus></swc-icon-element-plus>
<swc-icon-expand></swc-icon-expand>
<swc-icon-failed></swc-icon-failed>
<swc-icon-female></swc-icon-female>
<swc-icon-files></swc-icon-files>
<swc-icon-film></swc-icon-film>
<swc-icon-filter></swc-icon-filter>
<swc-icon-finished></swc-icon-finished>
<swc-icon-first-aid-kit></swc-icon-first-aid-kit>
<swc-icon-flag></swc-icon-flag>
<swc-icon-fold></swc-icon-fold>
<swc-icon-folder-add></swc-icon-folder-add>
<swc-icon-folder-checked></swc-icon-folder-checked>
<swc-icon-folder-delete></swc-icon-folder-delete>
<swc-icon-folder-opened></swc-icon-folder-opened>
<swc-icon-folder-remove></swc-icon-folder-remove>
<swc-icon-folder></swc-icon-folder>
<swc-icon-food></swc-icon-food>
<swc-icon-football></swc-icon-football>
<swc-icon-fork-spoon></swc-icon-fork-spoon>
<swc-icon-fries></swc-icon-fries>
<swc-icon-full-screen></swc-icon-full-screen>
<swc-icon-goblet-full></swc-icon-goblet-full>
<swc-icon-goblet-square-full></swc-icon-goblet-square-full>
<swc-icon-goblet-square></swc-icon-goblet-square>
<swc-icon-goblet></swc-icon-goblet>
<swc-icon-gold-medal></swc-icon-gold-medal>
<swc-icon-goods-filled></swc-icon-goods-filled>
<swc-icon-goods></swc-icon-goods>
<swc-icon-grape></swc-icon-grape>
<swc-icon-grid></swc-icon-grid>
<swc-icon-guide></swc-icon-guide>
<swc-icon-handbag></swc-icon-handbag>
<swc-icon-headset></swc-icon-headset>
<swc-icon-help-filled></swc-icon-help-filled>
<swc-icon-help></swc-icon-help>
<swc-icon-hide></swc-icon-hide>
<swc-icon-histogram></swc-icon-histogram>
<swc-icon-home-filled></swc-icon-home-filled>
<swc-icon-hot-water></swc-icon-hot-water>
<swc-icon-house></swc-icon-house>
<swc-icon-ice-cream-round></swc-icon-ice-cream-round>
<swc-icon-ice-cream-square></swc-icon-ice-cream-square>
<swc-icon-ice-cream></swc-icon-ice-cream>
<swc-icon-ice-drink></swc-icon-ice-drink>
<swc-icon-ice-tea></swc-icon-ice-tea>
<swc-icon-info-filled></swc-icon-info-filled>
<swc-icon-iphone></swc-icon-iphone>
<swc-icon-key></swc-icon-key>
<swc-icon-knife-fork></swc-icon-knife-fork>
<swc-icon-lightning></swc-icon-lightning>
<swc-icon-link></swc-icon-link>
<swc-icon-list></swc-icon-list>
<swc-icon-loading></swc-icon-loading>
<swc-icon-location-filled></swc-icon-location-filled>
<swc-icon-location-information></swc-icon-location-information>
<swc-icon-location></swc-icon-location>
<swc-icon-lock></swc-icon-lock>
<swc-icon-lollipop></swc-icon-lollipop>
<swc-icon-magic-stick></swc-icon-magic-stick>
<swc-icon-magnet></swc-icon-magnet>
<swc-icon-male></swc-icon-male>
<swc-icon-management></swc-icon-management>
<swc-icon-map-location></swc-icon-map-location>
<swc-icon-medal></swc-icon-medal>
<swc-icon-memo></swc-icon-memo>
<swc-icon-menu></swc-icon-menu>
<swc-icon-message-box></swc-icon-message-box>
<swc-icon-message></swc-icon-message>
<swc-icon-mic></swc-icon-mic>
<swc-icon-microphone></swc-icon-microphone>
<swc-icon-milk-tea></swc-icon-milk-tea>
<swc-icon-minus></swc-icon-minus>
<swc-icon-money></swc-icon-money>
<swc-icon-monitor></swc-icon-monitor>
<swc-icon-moon-night></swc-icon-moon-night>
<swc-icon-moon></swc-icon-moon>
<swc-icon-more-filled></swc-icon-more-filled>
<swc-icon-more></swc-icon-more>
<swc-icon-mostly-cloudy></swc-icon-mostly-cloudy>
<swc-icon-mouse></swc-icon-mouse>
<swc-icon-mug></swc-icon-mug>
<swc-icon-mute-notification></swc-icon-mute-notification>
<swc-icon-mute></swc-icon-mute>
<swc-icon-no-smoking></swc-icon-no-smoking>
<swc-icon-notebook></swc-icon-notebook>
<swc-icon-notification></swc-icon-notification>
<swc-icon-odometer></swc-icon-odometer>
<swc-icon-office-building></swc-icon-office-building>
<swc-icon-open></swc-icon-open>
<swc-icon-operation></swc-icon-operation>
<swc-icon-opportunity></swc-icon-opportunity>
<swc-icon-orange></swc-icon-orange>
<swc-icon-package.json></swc-icon-package.json>
<swc-icon-paperclip></swc-icon-paperclip>
<swc-icon-partly-cloudy></swc-icon-partly-cloudy>
<swc-icon-pear></swc-icon-pear>
<swc-icon-phone-filled></swc-icon-phone-filled>
<swc-icon-phone></swc-icon-phone>
<swc-icon-picture-filled></swc-icon-picture-filled>
<swc-icon-picture-rounded></swc-icon-picture-rounded>
<swc-icon-picture></swc-icon-picture>
<swc-icon-pie-chart></swc-icon-pie-chart>
<swc-icon-place></swc-icon-place>
<swc-icon-platform></swc-icon-platform>
<swc-icon-plus></swc-icon-plus>
<swc-icon-pointer></swc-icon-pointer>
<swc-icon-position></swc-icon-position>
<swc-icon-postcard></swc-icon-postcard>
<swc-icon-pouring></swc-icon-pouring>
<swc-icon-present></swc-icon-present>
<swc-icon-price-tag></swc-icon-price-tag>
<swc-icon-printer></swc-icon-printer>
<swc-icon-promotion></swc-icon-promotion>
<swc-icon-quartz-watch></swc-icon-quartz-watch>
<swc-icon-question-filled></swc-icon-question-filled>
<swc-icon-rank></swc-icon-rank>
<swc-icon-reading-lamp></swc-icon-reading-lamp>
<swc-icon-reading></swc-icon-reading>
<swc-icon-refresh-left></swc-icon-refresh-left>
<swc-icon-refresh-right></swc-icon-refresh-right>
<swc-icon-refresh></swc-icon-refresh>
<swc-icon-refrigerator></swc-icon-refrigerator>
<swc-icon-remove-filled></swc-icon-remove-filled>
<swc-icon-remove></swc-icon-remove>
<swc-icon-right></swc-icon-right>
<swc-icon-scale-to-original></swc-icon-scale-to-original>
<swc-icon-school></swc-icon-school>
<swc-icon-scissor></swc-icon-scissor>
<swc-icon-search></swc-icon-search>
<swc-icon-select></swc-icon-select>
<swc-icon-sell></swc-icon-sell>
<swc-icon-semi-select></swc-icon-semi-select>
<swc-icon-service></swc-icon-service>
<swc-icon-set-up></swc-icon-set-up>
<swc-icon-setting></swc-icon-setting>
<swc-icon-share></swc-icon-share>
<swc-icon-ship></swc-icon-ship>
<swc-icon-shop></swc-icon-shop>
<swc-icon-shopping-bag></swc-icon-shopping-bag>
<swc-icon-shopping-cart-full></swc-icon-shopping-cart-full>
<swc-icon-shopping-cart></swc-icon-shopping-cart>
<swc-icon-shopping-trolley></swc-icon-shopping-trolley>
<swc-icon-smoking></swc-icon-smoking>
<swc-icon-soccer></swc-icon-soccer>
<swc-icon-sold-out></swc-icon-sold-out>
<swc-icon-sort-down></swc-icon-sort-down>
<swc-icon-sort-up></swc-icon-sort-up>
<swc-icon-sort></swc-icon-sort>
<swc-icon-stamp></swc-icon-stamp>
<swc-icon-star-filled></swc-icon-star-filled>
<swc-icon-star></swc-icon-star>
<swc-icon-stopwatch></swc-icon-stopwatch>
<swc-icon-success-filled></swc-icon-success-filled>
<swc-icon-sugar></swc-icon-sugar>
<swc-icon-suitcase-line></swc-icon-suitcase-line>
<swc-icon-suitcase></swc-icon-suitcase>
<swc-icon-sunny></swc-icon-sunny>
<swc-icon-sunrise></swc-icon-sunrise>
<swc-icon-sunset></swc-icon-sunset>
<swc-icon-switch-button></swc-icon-switch-button>
<swc-icon-switch-filled></swc-icon-switch-filled>
<swc-icon-switch></swc-icon-switch>
<swc-icon-takeaway-box></swc-icon-takeaway-box>
<swc-icon-ticket></swc-icon-ticket>
<swc-icon-tickets></swc-icon-tickets>
<swc-icon-timer></swc-icon-timer>
<swc-icon-toilet-paper></swc-icon-toilet-paper>
<swc-icon-tools></swc-icon-tools>
<swc-icon-top-left></swc-icon-top-left>
<swc-icon-top-right></swc-icon-top-right>
<swc-icon-top></swc-icon-top>
<swc-icon-trend-charts></swc-icon-trend-charts>
<swc-icon-trophy-base></swc-icon-trophy-base>
<swc-icon-trophy></swc-icon-trophy>
<swc-icon-turn-off></swc-icon-turn-off>
<swc-icon-umbrella></swc-icon-umbrella>
<swc-icon-unlock></swc-icon-unlock>
<swc-icon-upload-filled></swc-icon-upload-filled>
<swc-icon-upload></swc-icon-upload>
<swc-icon-user-filled></swc-icon-user-filled>
<swc-icon-user></swc-icon-user>
<swc-icon-van></swc-icon-van>
<swc-icon-video-camera-filled></swc-icon-video-camera-filled>
<swc-icon-video-camera></swc-icon-video-camera>
<swc-icon-video-pause></swc-icon-video-pause>
<swc-icon-video-play></swc-icon-video-play>
<swc-icon-view></swc-icon-view>
<swc-icon-wallet-filled></swc-icon-wallet-filled>
<swc-icon-wallet></swc-icon-wallet>
<swc-icon-warn-triangle-filled></swc-icon-warn-triangle-filled>
<swc-icon-warning-filled></swc-icon-warning-filled>
<swc-icon-warning></swc-icon-warning>
<swc-icon-watch></swc-icon-watch>
<swc-icon-watermelon></swc-icon-watermelon>
<swc-icon-wind-power></swc-icon-wind-power>
<swc-icon-zoom-in></swc-icon-zoom-in>
<swc-icon-zoom-out></swc-icon-zoom-out>
```