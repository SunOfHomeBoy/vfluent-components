import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents, Icon, TextBlock } from '../../components'
import { ViewCommon } from '../components'
import { theme } from '../config'

@Component
export default class ViewIcon extends ViewCommon {
        @Provide() name: string = 'Icon'
        @Provide() description: string = '圖標組件'

        public componentView(h: CreateElement) {
                let elementIcons = []
                for (let name in theme.icons) {
                        elementIcons.push(
                                <div class={`col-4 col-md-1 ${theme.themePrefix}unit`}>
                                        <Icon name={name} size="huge" />
                                        <h5>{String(name).replace(/^icon/i, '')}</h5>
                                </div>
                        )
                }
                return (
                        <article>
                                <h4>基本用法</h4>
                                <section>
                                </section>
                                <code></code>
                                <h4>組件參數</h4>
                                <section class="attrs">
                                        <table class="attrs">
                                                <thead>
                                                        <tr>
                                                                <th width="15%">參數</th>
                                                                <th width="15%">類型</th>
                                                                <th width="25%">說明</th>
                                                                <th width="30%">可選值</th>
                                                                <th width="15%">默認值</th>
                                                        </tr>
                                                </thead>
                                                <tbody>
                                                </tbody>
                                        </table>
                                </section>
                                <h4>常用圖標</h4>
                                <code class="language-typescript">
                                        <p class="comment"></p>
                                </code>
                                <div class="container-fluid justify-content-start flex-nowrap">
                                        <div class="row">{elementIcons}</div>
                                </div>
                        </article>
                )
        }
}