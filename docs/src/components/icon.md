# Icon 图标

## 安装

现在 `swc-icon` 被抽离成了一个单独的 npm 包，现在使用时需要单独安装 `@swc-ui/icon`

```bash
npm i @swc-ui/icon
```

## 使用

```js
// 全量引入
import { registerComponent} from '@swc-ui/icon'
registerComponent()

// 按需引入
import { registerComponent as registerBackComponent } from 'swc-icon/dist/es/back.js'
registerBackComponent()
```

## 基础用法

通过`name`来设置不同的图标

<swc-icon-download></swc-icon-download>
<swc-icon-edit class="margin-left"></swc-icon-edit>
<swc-icon-reading class="margin-left"></swc-icon-reading>

<swc-icon name="shopping-trolley"></swc-icon>

```html
<swc-icon-download></swc-icon-download>
<swc-icon-edit class="margin-left"></swc-icon-edit>
<swc-icon-reading class="margin-left"></swc-icon-reading>
```

## 旋转

添加`spin`属性来使 icon 旋转

<swc-icon-loading spin></swc-icon-loading>
<swc-icon-refresh-right spin class="margin-left"></swc-icon-refresh-right>
<swc-icon-refresh spin class="margin-left"></swc-icon-refresh>

```html
<swc-icon-loading spin></swc-icon-loading>
<swc-icon-refresh-right spin class="margin-left"></swc-icon-refresh-right>
<swc-icon-refresh spin class="margin-left"></swc-icon-refresh>
```

## 大小

添加`size`属性来设置大小

<swc-icon-loading size="12px"></swc-icon-loading>
<swc-icon-loading class="margin-left"></swc-icon-loading>
<swc-icon-loading size="16px" class="margin-left"></swc-icon-loading>
<swc-icon-loading size="18px" class="margin-left"></swc-icon-loading>
<swc-icon-loading size="20px" class="margin-left"></swc-icon-loading>

```html
<swc-icon-loading size="12"></swc-icon-loading>
<swc-icon-loading></swc-icon-loading>
<swc-icon-loading size="16"></swc-icon-loading>
<swc-icon-loading size="18"></swc-icon-loading>
<swc-icon-loading size="20"></swc-icon-loading>
```

## 颜色

添加`color`属性来设置颜色

<swc-icon-loading></swc-icon-loading>
<swc-icon-loading color="red" class="margin-left"></swc-icon-loading>
<swc-icon-loading color="blue" class="margin-left"></swc-icon-loading>
<swc-icon-loading color="pink" class="margin-left"></swc-icon-loading>
<swc-icon-loading color="green" class="margin-left"></swc-icon-loading>

```html
<swc-icon-loading></swc-icon-loading>
<swc-icon-loading color="red"></swc-icon-loading>
<swc-icon-loading color="blue"></swc-icon-loading>
<swc-icon-loading color="pink"></swc-icon-loading>
<swc-icon-loading color="green"></swc-icon-loading>
```

## Attrs

| 属性名   | 说明   |类型| 可选值       | 默认值    |
|-------|------|-|-----------|--------|
| size  | 图标大小 |`string`| 合法的 css 单位 | `14px` |
| color | 图标颜色 |`string`| 合法的颜色值    | -      |

## 所有 icon

<div id="icons">
<swc-icon-edit size="20" style="margin: 10px;"></swc-icon-edit>
<swc-icon-download size="20" style="margin: 10px;"></swc-icon-download>
<swc-icon-coin size="20" style="margin: 10px;"></swc-icon-coin>
<swc-icon-female size="20" style="margin: 10px;"></swc-icon-female>
<swc-icon-edit-outline size="20" style="margin: 10px;"></swc-icon-edit-outline>
<swc-icon-files size="20" style="margin: 10px;"></swc-icon-files>
<swc-icon-film size="20" style="margin: 10px;"></swc-icon-film>
<swc-icon-error size="20" style="margin: 10px;"></swc-icon-error>
<swc-icon-eleme size="20" style="margin: 10px;"></swc-icon-eleme>
<swc-icon-coffee size="20" style="margin: 10px;"></swc-icon-coffee>
<swc-icon-folder-remove size="20" style="margin: 10px;"></swc-icon-folder-remove>
<swc-icon-folder-checked size="20" style="margin: 10px;"></swc-icon-folder-checked>
<swc-icon-folder-add size="20" style="margin: 10px;"></swc-icon-folder-add>
<swc-icon-folder-delete size="20" style="margin: 10px;"></swc-icon-folder-delete>
<swc-icon-football size="20" style="margin: 10px;"></swc-icon-football>
<swc-icon-finished size="20" style="margin: 10px;"></swc-icon-finished>
<swc-icon-folder size="20" style="margin: 10px;"></swc-icon-folder>
<swc-icon-fork-spoon size="20" style="margin: 10px;"></swc-icon-fork-spoon>
<swc-icon-first-aid-kit size="20" style="margin: 10px;"></swc-icon-first-aid-kit>
<swc-icon-goblet-full size="20" style="margin: 10px;"></swc-icon-goblet-full>
<swc-icon-food size="20" style="margin: 10px;"></swc-icon-food>
<swc-icon-folder-opened size="20" style="margin: 10px;"></swc-icon-folder-opened>
<swc-icon-full-screen size="20" style="margin: 10px;"></swc-icon-full-screen>
<swc-icon-goblet-square-full size="20" style="margin: 10px;"></swc-icon-goblet-square-full>
<swc-icon-goblet size="20" style="margin: 10px;"></swc-icon-goblet>
<swc-icon-goblet-square size="20" style="margin: 10px;"></swc-icon-goblet-square>
<swc-icon-goods size="20" style="margin: 10px;"></swc-icon-goods>
<swc-icon-guide size="20" style="margin: 10px;"></swc-icon-guide>
<swc-icon-help size="20" style="margin: 10px;"></swc-icon-help>
<swc-icon-headset size="20" style="margin: 10px;"></swc-icon-headset>
<swc-icon-house size="20" style="margin: 10px;"></swc-icon-house>
<swc-icon-ice-cream-round size="20" style="margin: 10px;"></swc-icon-ice-cream-round>
<swc-icon-hot-water size="20" style="margin: 10px;"></swc-icon-hot-water>
<swc-icon-heavy-rain size="20" style="margin: 10px;"></swc-icon-heavy-rain>
<swc-icon-ice-drink size="20" style="margin: 10px;"></swc-icon-ice-drink>
<swc-icon-ice-cream size="20" style="margin: 10px;"></swc-icon-ice-cream>
<swc-icon-key size="20" style="margin: 10px;"></swc-icon-key>
<swc-icon-ice-cream-square size="20" style="margin: 10px;"></swc-icon-ice-cream-square>
<swc-icon-knife-fork size="20" style="margin: 10px;"></swc-icon-knife-fork>
<swc-icon-ice-tea size="20" style="margin: 10px;"></swc-icon-ice-tea>
<swc-icon-info size="20" style="margin: 10px;"></swc-icon-info>
<swc-icon-grape size="20" style="margin: 10px;"></swc-icon-grape>
<swc-icon-light-rain size="20" style="margin: 10px;"></swc-icon-light-rain>
<swc-icon-location-information size="20" style="margin: 10px;"></swc-icon-location-information>
<swc-icon-lock size="20" style="margin: 10px;"></swc-icon-lock>
<swc-icon-location-outline size="20" style="margin: 10px;"></swc-icon-location-outline>
<swc-icon-lightning size="20" style="margin: 10px;"></swc-icon-lightning>
<swc-icon-magic-stick size="20" style="margin: 10px;"></swc-icon-magic-stick>
<swc-icon-link size="20" style="margin: 10px;"></swc-icon-link>
<swc-icon-lollipop size="20" style="margin: 10px;"></swc-icon-lollipop>
<swc-icon-location size="20" style="margin: 10px;"></swc-icon-location>
<swc-icon-loading size="20" style="margin: 10px;"></swc-icon-loading>
<swc-icon-male size="20" style="margin: 10px;"></swc-icon-male>
<swc-icon-menu size="20" style="margin: 10px;"></swc-icon-menu>
<swc-icon-microphone size="20" style="margin: 10px;"></swc-icon-microphone>
<swc-icon-minus size="20" style="margin: 10px;"></swc-icon-minus>
<swc-icon-message size="20" style="margin: 10px;"></swc-icon-message>
<swc-icon-map-location size="20" style="margin: 10px;"></swc-icon-map-location>
<swc-icon-message-solid size="20" style="margin: 10px;"></swc-icon-message-solid>
<swc-icon-mic size="20" style="margin: 10px;"></swc-icon-mic>
<swc-icon-milk-tea size="20" style="margin: 10px;"></swc-icon-milk-tea>
<swc-icon-medal size="20" style="margin: 10px;"></swc-icon-medal>
<swc-icon-medal- size="20" style="margin: 10px;"></swc-icon-medal->
<swc-icon-mobile size="20" style="margin: 10px;"></swc-icon-mobile>
<swc-icon-mobile-phone size="20" style="margin: 10px;"></swc-icon-mobile-phone>
<swc-icon-money size="20" style="margin: 10px;"></swc-icon-money>
<swc-icon-more size="20" style="margin: 10px;"></swc-icon-more>
<swc-icon-no-smoking size="20" style="margin: 10px;"></swc-icon-no-smoking>
<swc-icon-more-outline size="20" style="margin: 10px;"></swc-icon-more-outline>
<swc-icon-notebook- size="20" style="margin: 10px;"></swc-icon-notebook->
<swc-icon-s-home size="20" style="margin: 10px;"></swc-icon-s-home>
<swc-icon-news size="20" style="margin: 10px;"></swc-icon-news>
<swc-icon-odometer size="20" style="margin: 10px;"></swc-icon-odometer>
<swc-icon name="notebook-1" size="20" style="margin: 10px;"></swc-icon>
<swc-icon-s-open size="20" style="margin: 10px;"></swc-icon-s-open>
<swc-icon-s-marketing size="20" style="margin: 10px;"></swc-icon-s-marketing>
<swc-icon-mouse size="20" style="margin: 10px;"></swc-icon-mouse>
<swc-icon-s-management size="20" style="margin: 10px;"></swc-icon-s-management>
<swc-icon-s-operation size="20" style="margin: 10px;"></swc-icon-s-operation>
<swc-icon-office-building size="20" style="margin: 10px;"></swc-icon-office-building>
<swc-icon-open size="20" style="margin: 10px;"></swc-icon-open>
<swc-icon-ship size="20" style="margin: 10px;"></swc-icon-ship>
<swc-icon-sell size="20" style="margin: 10px;"></swc-icon-sell>
<swc-icon-search size="20" style="margin: 10px;"></swc-icon-search>
<swc-icon-service size="20" style="margin: 10px;"></swc-icon-service>
<swc-icon-scissors size="20" style="margin: 10px;"></swc-icon-scissors>
<swc-icon-shopping-bag- size="20" style="margin: 10px;"></swc-icon-shopping-bag->
<swc-icon-orange size="20" style="margin: 10px;"></swc-icon-orange>
<swc-icon-phone-outline size="20" style="margin: 10px;"></swc-icon-phone-outline>
<swc-icon-picture size="20" style="margin: 10px;"></swc-icon-picture>
<swc-icon-receiving size="20" style="margin: 10px;"></swc-icon-receiving>
<swc-icon-phone size="20" style="margin: 10px;"></swc-icon-phone>
<swc-icon-picture-outline-round size="20" style="margin: 10px;"></swc-icon-picture-outline-round>
<swc-icon-refresh-left size="20" style="margin: 10px;"></swc-icon-refresh-left>
<swc-icon-picture-outline size="20" style="margin: 10px;"></swc-icon-picture-outline>
<swc-icon-pie-chart size="20" style="margin: 10px;"></swc-icon-pie-chart>
<swc-icon-s-data size="20" style="margin: 10px;"></swc-icon-s-data>
<swc-icon-refrigerator size="20" style="margin: 10px;"></swc-icon-refrigerator>
<swc-icon-s-cooperation size="20" style="margin: 10px;"></swc-icon-s-cooperation>
<swc-icon-s-check size="20" style="margin: 10px;"></swc-icon-s-check>
<swc-icon-s-flag size="20" style="margin: 10px;"></swc-icon-s-flag>
<swc-icon-s-custom size="20" style="margin: 10px;"></swc-icon-s-custom>
<swc-icon-s-fold size="20" style="margin: 10px;"></swc-icon-s-fold>
<swc-icon-s-finance size="20" style="margin: 10px;"></swc-icon-s-finance>
<swc-icon-remove-outline size="20" style="margin: 10px;"></swc-icon-remove-outline>
<swc-icon-s-comment size="20" style="margin: 10px;"></swc-icon-s-comment>
<swc-icon-remove size="20" style="margin: 10px;"></swc-icon-remove>
<swc-icon-refresh-right size="20" style="margin: 10px;"></swc-icon-refresh-right>
<swc-icon-s-unfold size="20" style="margin: 10px;"></swc-icon-s-unfold>
<swc-icon-school size="20" style="margin: 10px;"></swc-icon-school>
<swc-icon-s-shop size="20" style="margin: 10px;"></swc-icon-s-shop>
<swc-icon-s-ticket size="20" style="margin: 10px;"></swc-icon-s-ticket>
<swc-icon-sort-up size="20" style="margin: 10px;"></swc-icon-sort-up>
<swc-icon-star-on size="20" style="margin: 10px;"></swc-icon-star-on>
<swc-icon-success size="20" style="margin: 10px;"></swc-icon-success>
<swc-icon-sort size="20" style="margin: 10px;"></swc-icon-sort>
<swc-icon-takeaway-box size="20" style="margin: 10px;"></swc-icon-takeaway-box>
<swc-icon-stopwatch size="20" style="margin: 10px;"></swc-icon-stopwatch>
<swc-icon-thumb size="20" style="margin: 10px;"></swc-icon-thumb>
<swc-icon-tickets size="20" style="margin: 10px;"></swc-icon-tickets>
<swc-icon-turn-off-microphone size="20" style="margin: 10px;"></swc-icon-turn-off-microphone>
<swc-icon-time size="20" style="margin: 10px;"></swc-icon-time>
<swc-icon-truck size="20" style="margin: 10px;"></swc-icon-truck>
<swc-icon-upload size="20" style="margin: 10px;"></swc-icon-upload>
<swc-icon-user size="20" style="margin: 10px;"></swc-icon-user>
<swc-icon-user-solid size="20" style="margin: 10px;"></swc-icon-user-solid>
<swc-icon name="upload1" size="20" style="margin: 10px;"></swc-icon>
<swc-icon-video-camera-solid size="20" style="margin: 10px;"></swc-icon-video-camera-solid>
<swc-icon-video-play size="20" style="margin: 10px;"></swc-icon-video-play>
<swc-icon-video-camera size="20" style="margin: 10px;"></swc-icon-video-camera>
<swc-icon-right size="20" style="margin: 10px;"></swc-icon-right>
<swc-icon-video-pause size="20" style="margin: 10px;"></swc-icon-video-pause>
<swc-icon-star-off size="20" style="margin: 10px;"></swc-icon-star-off>
<swc-icon-trophy size="20" style="margin: 10px;"></swc-icon-trophy>
<swc-icon-wallet size="20" style="margin: 10px;"></swc-icon-wallet>
<swc-icon-watch size="20" style="margin: 10px;"></swc-icon-watch>
<swc-icon-warning-outline size="20" style="margin: 10px;"></swc-icon-warning-outline>
<swc-icon-wind-power size="20" style="margin: 10px;"></swc-icon-wind-power>
<swc-icon-view size="20" style="margin: 10px;"></swc-icon-view>
<swc-icon-watermelon size="20" style="margin: 10px;"></swc-icon-watermelon>
<swc-icon-share size="20" style="margin: 10px;"></swc-icon-share>
<swc-icon-set-up size="20" style="margin: 10px;"></swc-icon-set-up>
<swc-icon-zoom-in size="20" style="margin: 10px;"></swc-icon-zoom-in>
<swc-icon-water-cup size="20" style="margin: 10px;"></swc-icon-water-cup>
<swc-icon-warning size="20" style="margin: 10px;"></swc-icon-warning>
<swc-icon-watch- size="20" style="margin: 10px;"></swc-icon-watch->
<swc-icon-setting size="20" style="margin: 10px;"></swc-icon-setting>
<swc-icon-plus size="20" style="margin: 10px;"></swc-icon-plus>
<swc-icon-zoom-out size="20" style="margin: 10px;"></swc-icon-zoom-out>
<swc-icon-place size="20" style="margin: 10px;"></swc-icon-place>
<swc-icon-pear size="20" style="margin: 10px;"></swc-icon-pear>
<swc-icon-partly-cloudy size="20" style="margin: 10px;"></swc-icon-partly-cloudy>
<swc-icon-paperclip size="20" style="margin: 10px;"></swc-icon-paperclip>
<swc-icon-platform-eleme size="20" style="margin: 10px;"></swc-icon-platform-eleme>
<swc-icon-s-claim size="20" style="margin: 10px;"></swc-icon-s-claim>
<swc-icon-s-goods size="20" style="margin: 10px;"></swc-icon-s-goods>
<swc-icon-s-grid size="20" style="margin: 10px;"></swc-icon-s-grid>
<swc-icon-s-help size="20" style="margin: 10px;"></swc-icon-s-help>
<swc-icon name="shopping-bag-1" size="20" style="margin: 10px;"></swc-icon>
<swc-icon-shopping-cart- size="20" style="margin: 10px;"></swc-icon-shopping-cart->
<swc-icon name="shopping-cart-1" size="20" style="margin: 10px;"></swc-icon>
<swc-icon-smoking size="20" style="margin: 10px;"></swc-icon-smoking>
<swc-icon-shopping-cart-full size="20" style="margin: 10px;"></swc-icon-shopping-cart-full>
<swc-icon-soccer size="20" style="margin: 10px;"></swc-icon-soccer>
<swc-icon-s-promotion size="20" style="margin: 10px;"></swc-icon-s-promotion>
<swc-icon-sort-down size="20" style="margin: 10px;"></swc-icon-sort-down>
<swc-icon-s-release size="20" style="margin: 10px;"></swc-icon-s-release>
<swc-icon-s-opportunity size="20" style="margin: 10px;"></swc-icon-s-opportunity>
<swc-icon-s-order size="20" style="margin: 10px;"></swc-icon-s-order>
<swc-icon-s-tools size="20" style="margin: 10px;"></swc-icon-s-tools>
<swc-icon-sold-out size="20" style="margin: 10px;"></swc-icon-sold-out>
<swc-icon-s-platform size="20" style="margin: 10px;"></swc-icon-s-platform>
<swc-icon-suitcase size="20" style="margin: 10px;"></swc-icon-suitcase>
<swc-icon-suitcase- size="20" style="margin: 10px;"></swc-icon-suitcase->
<swc-icon-sugar size="20" style="margin: 10px;"></swc-icon-sugar>
<swc-icon-refresh size="20" style="margin: 10px;"></swc-icon-refresh>
<swc-icon-sunset size="20" style="margin: 10px;"></swc-icon-sunset>
<swc-icon-sunrise size="20" style="margin: 10px;"></swc-icon-sunrise>
<swc-icon-sunrise size="20" style="margin: 10px;"></swc-icon-sunrise>
<swc-icon-top-left size="20" style="margin: 10px;"></swc-icon-top-left>
<swc-icon-add-location size="20" style="margin: 10px;"></swc-icon-add-location>
<swc-icon-switch-button size="20" style="margin: 10px;"></swc-icon-switch-button>
<swc-icon-aim size="20" style="margin: 10px;"></swc-icon-aim>
<swc-icon-toilet-paper size="20" style="margin: 10px;"></swc-icon-toilet-paper>
<swc-icon-back size="20" style="margin: 10px;"></swc-icon-back>
<swc-icon-timer size="20" style="margin: 10px;"></swc-icon-timer>
<swc-icon-arrow-left size="20" style="margin: 10px;"></swc-icon-arrow-left>
<swc-icon-table-lamp size="20" style="margin: 10px;"></swc-icon-table-lamp>
<swc-icon-attract size="20" style="margin: 10px;"></swc-icon-attract>
<swc-icon-tableware size="20" style="margin: 10px;"></swc-icon-tableware>
<swc-icon-arrow-right size="20" style="margin: 10px;"></swc-icon-arrow-right>
<swc-icon-top-right size="20" style="margin: 10px;"></swc-icon-top-right>
<swc-icon-arrow-up size="20" style="margin: 10px;"></swc-icon-arrow-up>
<swc-icon-trophy- size="20" style="margin: 10px;"></swc-icon-trophy->
<swc-icon-alarm-clock size="20" style="margin: 10px;"></swc-icon-alarm-clock>
<swc-icon-top size="20" style="margin: 10px;"></swc-icon-top>
<swc-icon-arrow-down size="20" style="margin: 10px;"></swc-icon-arrow-down>
<swc-icon-turn-off size="20" style="margin: 10px;"></swc-icon-turn-off>
<swc-icon-apple size="20" style="margin: 10px;"></swc-icon-apple>
<swc-icon-monitor size="20" style="margin: 10px;"></swc-icon-monitor>
<swc-icon-bangzhu size="20" style="margin: 10px;"></swc-icon-bangzhu>
<swc-icon-unlock size="20" style="margin: 10px;"></swc-icon-unlock>
<swc-icon-bell size="20" style="margin: 10px;"></swc-icon-bell>
<swc-icon-postcard size="20" style="margin: 10px;"></swc-icon-postcard>
<swc-icon-bottom-right size="20" style="margin: 10px;"></swc-icon-bottom-right>
<swc-icon-umbrella size="20" style="margin: 10px;"></swc-icon-umbrella>
<swc-icon-box size="20" style="margin: 10px;"></swc-icon-box>
<swc-icon-moon size="20" style="margin: 10px;"></swc-icon-moon>
<swc-icon-brush size="20" style="margin: 10px;"></swc-icon-brush>
<swc-icon-present size="20" style="margin: 10px;"></swc-icon-present>
<swc-icon-bank-card size="20" style="margin: 10px;"></swc-icon-bank-card>
<swc-icon-position size="20" style="margin: 10px;"></swc-icon-position>
<swc-icon-bottom-left size="20" style="margin: 10px;"></swc-icon-bottom-left>
<swc-icon-price-tag size="20" style="margin: 10px;"></swc-icon-price-tag>
<swc-icon-bicycle size="20" style="margin: 10px;"></swc-icon-bicycle>
<swc-icon-potato-strips size="20" style="margin: 10px;"></swc-icon-potato-strips>
<swc-icon-baseball size="20" style="margin: 10px;"></swc-icon-baseball>
<swc-icon-printer size="20" style="margin: 10px;"></swc-icon-printer>
<swc-icon-caret-left size="20" style="margin: 10px;"></swc-icon-caret-left>
<swc-icon-sunny size="20" style="margin: 10px;"></swc-icon-sunny>
<swc-icon-camera-solid size="20" style="margin: 10px;"></swc-icon-camera-solid>
<swc-icon-moon-night size="20" style="margin: 10px;"></swc-icon-moon-night>
<swc-icon-caret-right size="20" style="margin: 10px;"></swc-icon-caret-right>
<swc-icon-reading size="20" style="margin: 10px;"></swc-icon-reading>
<swc-icon-caret-top size="20" style="margin: 10px;"></swc-icon-caret-top>
<swc-icon-rank size="20" style="margin: 10px;"></swc-icon-rank>
<swc-icon-caret-bottom size="20" style="margin: 10px;"></swc-icon-caret-bottom>
<swc-icon-question size="20" style="margin: 10px;"></swc-icon-question>
<swc-icon-basketball size="20" style="margin: 10px;"></swc-icon-basketball>
<swc-icon-burger size="20" style="margin: 10px;"></swc-icon-burger>
<swc-icon-bottom size="20" style="margin: 10px;"></swc-icon-bottom>
<swc-icon-c-scale-to-original size="20" style="margin: 10px;"></swc-icon-c-scale-to-original>
<swc-icon-camera size="20" style="margin: 10px;"></swc-icon-camera>
<swc-icon-chat-dot-round size="20" style="margin: 10px;"></swc-icon-chat-dot-round>
<swc-icon-check size="20" style="margin: 10px;"></swc-icon-check>
<swc-icon-chat-line-square size="20" style="margin: 10px;"></swc-icon-chat-line-square>
<swc-icon-chat-round size="20" style="margin: 10px;"></swc-icon-chat-round>
<swc-icon-chat-dot-square size="20" style="margin: 10px;"></swc-icon-chat-dot-square>
<swc-icon-chat-line-round size="20" style="margin: 10px;"></swc-icon-chat-line-round>
<swc-icon-chat-square size="20" style="margin: 10px;"></swc-icon-chat-square>
<swc-icon-circle-check size="20" style="margin: 10px;"></swc-icon-circle-check>
<swc-icon-circle-close size="20" style="margin: 10px;"></swc-icon-circle-close>
<swc-icon-chicken size="20" style="margin: 10px;"></swc-icon-chicken>
<swc-icon-circle-plus-outline size="20" style="margin: 10px;"></swc-icon-circle-plus-outline>
<swc-icon-circle-plus size="20" style="margin: 10px;"></swc-icon-circle-plus>
<swc-icon-close-notification size="20" style="margin: 10px;"></swc-icon-close-notification>
<swc-icon-close size="20" style="margin: 10px;"></swc-icon-close>
<swc-icon-cloudy-and-sunny size="20" style="margin: 10px;"></swc-icon-cloudy-and-sunny>
<swc-icon-cherry size="20" style="margin: 10px;"></swc-icon-cherry>
<swc-icon-coffee-cup size="20" style="margin: 10px;"></swc-icon-coffee-cup>
<swc-icon-cloudy size="20" style="margin: 10px;"></swc-icon-cloudy>
<swc-icon-collection-tag size="20" style="margin: 10px;"></swc-icon-collection-tag>
<swc-icon-cold-drink size="20" style="margin: 10px;"></swc-icon-cold-drink>
<swc-icon-collection size="20" style="margin: 10px;"></swc-icon-collection>
<swc-icon-coordinate size="20" style="margin: 10px;"></swc-icon-coordinate>
<swc-icon-connection size="20" style="margin: 10px;"></swc-icon-connection>
<swc-icon-crop size="20" style="margin: 10px;"></swc-icon-crop>
<swc-icon-cpu size="20" style="margin: 10px;"></swc-icon-cpu>
<swc-icon-copy-document size="20" style="margin: 10px;"></swc-icon-copy-document>
<swc-icon-d-caret size="20" style="margin: 10px;"></swc-icon-d-caret>
<swc-icon-d-arrow-right size="20" style="margin: 10px;"></swc-icon-d-arrow-right>
<swc-icon-data-board size="20" style="margin: 10px;"></swc-icon-data-board>
<swc-icon-data-analysis size="20" style="margin: 10px;"></swc-icon-data-analysis>
<swc-icon-data-line size="20" style="margin: 10px;"></swc-icon-data-line>
<swc-icon-d-arrow-left size="20" style="margin: 10px;"></swc-icon-d-arrow-left>
<swc-icon-delete-solid size="20" style="margin: 10px;"></swc-icon-delete-solid>
<swc-icon-delete-location size="20" style="margin: 10px;"></swc-icon-delete-location>
<swc-icon-discount size="20" style="margin: 10px;"></swc-icon-discount>
<swc-icon-date size="20" style="margin: 10px;"></swc-icon-date>
<swc-icon-dessert size="20" style="margin: 10px;"></swc-icon-dessert>
<swc-icon-dish size="20" style="margin: 10px;"></swc-icon-dish>
<swc-icon-delete size="20" style="margin: 10px;"></swc-icon-delete>
<swc-icon-document-copy size="20" style="margin: 10px;"></swc-icon-document-copy>
<swc-icon-document size="20" style="margin: 10px;"></swc-icon-document>
<swc-icon-discover size="20" style="margin: 10px;"></swc-icon-discover>
<swc-icon-document-add size="20" style="margin: 10px;"></swc-icon-document-add>
<swc-icon-document-checked size="20" style="margin: 10px;"></swc-icon-document-checked>
<swc-icon-document-delete size="20" style="margin: 10px;"></swc-icon-document-delete>
<swc-icon-document-remove size="20" style="margin: 10px;"></swc-icon-document-remove>
<swc-icon-dish- size="20" style="margin: 10px;"></swc-icon-dish->
</div>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    mounted() {
        document.getElementById('icons').addEventListener('click', ev=>{
        const target = ev.target;
        const nodeName = target.nodeName;
        const tagName = nodeName.toLowerCase();
        const icon = `<${tagName}></${tagName}>`;
        
            if (window.navigator.clipboard) {
                window.navigator.clipboard
                    .writeText(icon)
                    .then(
                        () => {
                            alert(`已复制到粘贴板：${icon}`);
                        },
                        () => {
                            alert(`复制到粘贴板失败：${icon}`);
                        }
                    )
                    .catch(e => {
                        throw e;
                    });
            }else{
                alert('浏览器不支持，请切换到chrome浏览器')
            }
        
    },false)
    }
})
</script>
