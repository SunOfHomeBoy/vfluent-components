import { Component, CreateElement } from 'vue-component-decorator'
import { Badge, vfluents } from '../../components'
import { ViewComponent } from '../components'
import { theme } from '../config';

@Component
export class ViewBadge extends ViewComponent {
        public created() {
                this.props.name = 'Badge'
                this.props.description = '徽章展示新的或者未讀的信息條目'
        }

        public renderComponent(h: CreateElement): any {
                return (
                        <article>
                                <dfn>基本用法<small>展示新消息數量</small></dfn>
                                <samp>
                                        <span>評論</span><Badge text={12} />
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span>回覆</span><Badge text={3} />
                                </samp>
                                <code></code>
                                <dfn>最大數值<small>超過最大數值則顯示&nbsp;<strong>&#123;max&#125;+</strong>&nbsp;格式</small></dfn>
                                <samp>
                                        <span>評論</span><Badge text={123} />
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span>回覆</span><Badge text={12} max={10} />
                                </samp>
                                <code></code>
                                <dfn>自定義型<small>顯示任何文本內容</small></dfn>
                                <samp>
                                        <span>評論</span><Badge text="New" />
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span>回覆</span><Badge text="Hot" />
                                </samp>
                                <code></code>
                                <dfn>小圓點型<small>紅點的形式標註需要關注的內容</small></dfn>
                                <samp>
                                        <span>評論</span><Badge text=" " />
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span>回覆</span><Badge text=" " />
                                </samp>
                                <code></code>
                                <dfn>徽章位置<small>通常採用上標形似展示徽章</small></dfn>
                                <samp>
                                        <span>評論Top</span><Badge text={3} align="Top" />
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span>評論Center</span><Badge text={3} align="Center" />
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span>評論Bottom</span><Badge text={3} align="Bottom" />
                                </samp>
                        </article>
                )
        }
}