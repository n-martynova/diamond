<template>
    <div class="game-container">
        <div class="score-container" :class="maxReached ? 'completed' : ''" id="score">
            <div class="row">
                <div class="col left">
                    <div class="score">{{ animatedScore | formatNumber }}</div>
                    <div class="share-btn" @click="shareModalVisible = true"></div>
                    <div class="score-text">Очков собрано</div>
                </div>
                <div class="col right">
                    <div class="score-max">{{ maxScore | formatNumber }}</div>
                    <div class="score-text">Для участия в розыгрыше</div>
                </div>
            </div>
            <div class="progress-container" :class="maxReached ? 'completed' : ''">
                <div class="progress"></div>
                <div class="progress-mask" :style="`width: ${maxReached ? 0 : 100 - progressPercent}%`"></div>
            </div>
        </div>

        <transition name="fade" mode="out-in">
            <div class="popup 10k" v-if="popupVisible">
                
                <div class="popup-container">
                    <div class="grats">Поздравляем! Вы набрали</div>
                    <div class="score-max">{{ maxScore | formatNumber }}</div>

                    <div class="popup-text">
                        И теперь участвуете в розыгрыше нового мерча от Рокетбанка. Ждите итоги XX февраля на&nbsp;этой странице и делитесь игрой с друзьями
                    </div>

                    <div class="resume-btn" @click="popupVisible = false">Продолжить игру</div>
                </div>
            </div>
        </transition>

        <transition name="fade" mode="out-in">
            <div class="popup share-modal" v-if="shareModalVisible">
                
                <div class="popup-container">
                    <div class="close-btn" @click="shareModalVisible = false"></div>
                    <div class="grats">Ваш результат</div>
                    <div class="score-share">{{ score | formatNumber }}</div>

                    <div class="popup-text">
                        Вы можете поделиться им со своими друзьями
                    </div>

                    <div class="social">
                        <a :href="fbLink" alt="фейсбук" target="_blank" />
                        <a :href="vkLink" alt="вконтакте" target="_blank" />
                        <a :href="twitterLink" alt="твиттер" target="_blank" />
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>

import PixiExtra from '@/Lib/PixiExtra'
import Facade from '@/Facade'
import EventBus from '@/eventBus'

export default {
    name: 'match3',
    props: {
        token: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            score: 0,
            animatedScore: 0,
            maxScore: 10000,
            maxReached: false,
            interval: false,
            shareModalVisible: false,
            popupVisible: false,
        }
    },
    filters: {
        formatNumber(number) {
            return new Intl.NumberFormat('ru-RU').format(Math.round(number))
        }
    },
    computed: {
        progressPercent() {
            return this.score / 10000 * 100
        },
        inviteUrl() {
            return window.location.origin
        },

        fbLink() {
            return `https://www.facebook.com/sharer.php?u=${this.inviteUrl}&hashtag=%23рокетбанк_2х2&quote=Мой результат — ${this.score} очков!`
        },

        vkLink() {
            return `https://vk.com/share.php?url=${this.inviteUrl}&title=Мой результат — ${this.score} очков!`
        },

        twitterLink() {
            return (
                `https://twitter.com/intent/tweet?hashtags=рокетбанк_2х2,рокетбанк,2х2&&related=rocketbank` +
                `&text=Мой результат — ${this.score} очков!&tw_p=tweetbutton&url=${this.inviteUrl}&via=rocketbank`
            )
        },
    },
    watch: {
        score: function() {

            clearInterval(this.interval)

            if (this.score >= this.maxScore && !this.maxReached) {
                this.maxReached = true
                this.popupVisible = true

                // this.$http({
                //     url: `https://rocketbank.ru/api/marketing/orders/diamond/${this.token}/complete`,
                //     method: 'POST'
                // }).then(res => {
                //     console.log('success')
                // })
                // .catch(error => {
                //     console.log(error)
                // })
            }

            this.interval = window.setInterval(function() {
                if (this.displayedScore !== this.score) {
                    var change = (this.score - this.animatedScore) / 10
                    change = change >= 0 ? Math.ceil(change) : Math.floor(change)
                    this.animatedScore = this.animatedScore + change
                }
            }.bind(this), 20)
        }
    },
    mounted() {
        new Facade()

        this.displayedScore = this.score ? this.score : 0

        EventBus.$on('scoreChanged', (score) => {
            this.score = score
        })
    },
    methods: {
    }
}
</script>
<style lang="scss">
canvas {
    margin-top: 40px;
}
.score-container {
    padding: 19px 20px 23px;
    margin: 20px auto 0;
    border: 1px solid rgba(255,255,255,0.20);
    border-radius: 9px;
    @media (min-width: 768px) {
        width: 639px;
    }
    @media (max-width: 767px) {
        width: auto;
        padding: 19px 10px 23px;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 0;
    }
    &.completed {
        border: 1px solid #FFBF08;
    }
    .row {
        display: flex;
        align-items: flex-start;
    }
    .col {
        width: 50%;
        &.left {
            text-align: left;
        }
        &.right {
            text-align: right;
        }
    }
    .score {
        display: inline-block;
        vertical-align: middle;
        margin-right: 7px;
        font-weight: 600;
        font-size: 30px;
        line-height: 1.2;
    }
    .share-btn {
        display: inline-block;
        vertical-align: middle;
        width: 21px;
        height: 21px;
        background: url('~@/assets/share-btn.svg') no-repeat;
        background-size: contain;
        cursor: pointer;
    }
    .score-text {
        margin-top: 4px;
        margin-bottom: 10px;
        font-size: 16px;
        line-height: 1.2;
        color: rgba(255, 255, 255, .5);
    }
    .score-max {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-weight: 600;
        letter-spacing: -.97px;
        font-size: 30px;
        line-height: 1.2;
        color: #FFBF08;

        &:before {
            content: '';
            width: 23px;
            height: 23px;
            margin-right: 5px;
            vertical-align: middle;
            background: url('~@/assets/star.svg') no-repeat;
            background-size: contain;
        }
    }
}

.progress-container {
    position: relative;
    width: 100%;
    height: 10px;
    border: 1px solid rgba(255,255,255,0.20);
    border-radius: 5px;
    transition: background-color .3s linear;
    overflow: hidden;
    &.completed {
        background-color: #FFBF08;
        .progress {
            background-image: none;
        }
    }
    .progress {
        width: 100%;
        height: 100%;
        background-image: linear-gradient(270deg, #8D29FF 0%, #28BAFF 100%);
        border-radius: 5px;
    }
    .progress-mask {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        background-color: #000;
        transition: width .3s linear;
    }
}

.popup {
    min-height: 100vh;
    min-height: -webkit-fill-available;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .85);
    text-align: center;

    &.share-modal {
        .popup-container {
            position: relative;
            margin-top: 0;
            background: #FFFFFF;
            box-shadow: 0 10px 70px 0 rgba(0,0,0,0.75);
            border-radius: 15px;
            color: #000;
        }
        .close-btn {
            position: absolute;
            top: 14px;
            right: 16px;
            width: 24px;
            height: 24px;
            background: url('~@/assets/close-black.svg') no-repeat;
            background-size: contain;
            cursor: pointer;
        }
    }

    .grats {
        font-weight: 600;
    }
    .score-max {
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1.2;
        letter-spacing: -2.92px;
        text-align: center;
        font-weight: 600;
        color: #FFBF08;
        &:before {
            content: '';
            margin-right: 5px;
            vertical-align: middle;
            background: url('~@/assets/star.svg') no-repeat;
            background-size: contain;
        }
    }
}

@media (min-width: 1250px) {
    .popup-container {
        width: 530px;
        margin: 0 auto;
        .grats {
            font-size: 30px;
        }
        .score-max {
            font-size: 100px;
            &:before {
                width: 71px;
                height: 71px;
            }
        }
        .popup-text {
            padding: 0 10px;
            line-height: 1.2;
            font-size: 20px;
        }
        .resume-btn {
            width: 232px;
            margin-left: auto;
            margin-right: auto;

            height: 70px;
            margin-top: 50px;
            margin-bottom: 60px;
            line-height: 70px;
            font-size: 20px;
        }
        .social {
            margin-top: 26px;
            a {
                height: 36px;
            }
        }
    }

    .share-modal {
        .popup-container {
            padding: 60px 43px 50px;
        }
        .grats {
            font-size: 24px;
        }
        .score-share {
            font-size: 65px;
            letter-spacing: -1.9px;
            font-weight: 600;
            line-height: 1.2;
            margin-bottom: 20px;
            &:after {
                content: 'очков';
                display: block;
                font-size: 24px;
                padding-bottom: 20px;
                border-bottom: 1px solid #000;
                letter-spacing: -0.7px;
            }
        }
    }
}

@media (max-width: 1249px) {
    .popup-container {
        max-width: 800px;
        margin: 67px 20px 0;
        text-align: center;
        .grats {
            font-size: 20px;
        }
        .score-max {
            font-size: 44px;
            line-height: 1.4;
            &:before {
                width: 40px;
                height: 40px;
            }
        }
        .popup-text {
            line-height: 1.2;
            font-size: 16px;
        }
        .resume-btn {
            height: 60px;
            margin-top: 20px;
            margin-bottom: 25px;
            line-height: 60px;
            font-size: 17px;
        }
        .social {
            margin-top: 14px;
            a {
                height: 28px;
            }
        }
    }
    .share-modal {
        .popup-container {
            padding: 40px 43px 30px;
        }
        .score-share {
            font-size: 57px;
            font-weight: 600;
            line-height: 1;
            margin-bottom: 20px;
            &:after {
                content: 'очков';
                display: block;
                font-size: 20px;
                padding-bottom: 20px;
                border-bottom: 1px solid #000;
            }
        }
        .close-btn {

        }
    }
}
.resume-btn {
    padding: 0 16px;
    font-size: 20px;
    background: #01F185;
    box-shadow: 0 0 13px 0 rgba(64,253,1,0.46);
    border-radius: 5px;
    color: #000000;
    font-weight: 600;
    cursor: pointer;
}
.social {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        display: block;
        cursor: pointer;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
    }

    a:nth-child(1) {
        width: 35px;
        background-image: url('~@/assets/fb.svg');
    }

    a:nth-child(2) {
        width: 57px;
        margin-left: 32px;
        background-image: url('~@/assets/vk.svg');
    }

    a:nth-child(3) {
        width: 43px;
        margin-left: 34px;
        background-image: url('~@/assets/tw.svg');
    }
}
</style>
