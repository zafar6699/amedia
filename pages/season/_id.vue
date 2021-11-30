<template>
    <div>
        <div class="id">
            <div class="season" v-if="anime != null">
                <!-- <pre>{{ anime }}</pre> -->
                <!-- <pre>{{ viewSeria }}</pre> -->
                <div class="top">
                    <img :src="$cdn + anime.image" alt="" class="back" />
                    <div class="opacity-banner"></div>
                    <div class="info">
                        <div class="container">
                            <div class="title-top">
                                <h1>
                                    {{ anime.name[$i18n.locale] }}
                                </h1>
                            </div>
                            <div class="card-row">
                                <div class="item-3 item-md-6">
                                    <div class="info-film">
                                        <div class="title">
                                            <h2>{{ $t('info') }}</h2>
                                            <div class="box-line">
                                                <h3 class="key">
                                                    {{ $t('country') }}
                                                </h3>
                                                <h3 class="value">
                                                    {{ anime.country }}
                                                </h3>
                                            </div>
                                            <div class="box-line">
                                                <h3 class="key">
                                                    {{ $t('rejissor') }}
                                                </h3>
                                                <h3 class="value">
                                                    {{ anime.rejissor }}
                                                </h3>
                                            </div>
                                            <div class="box-line">
                                                <h3 class="key">
                                                    {{ $t('studiya') }}
                                                </h3>
                                                <h3 class="value">
                                                    {{ anime.studia }}
                                                </h3>
                                            </div>
                                            <div class="box folder">
                                                <h3 class="key">
                                                    {{ $t('onejanr') }}
                                                </h3>
                                                <div
                                                    class="link"
                                                    v-if="anime.janr != null"
                                                >
                                                    <nuxt-link
                                                        v-for="janr in anime.janr"
                                                        :key="janr"
                                                        to="/"
                                                        >{{
                                                            janr[
                                                                `name${$i18n.locale}`
                                                            ]
                                                        }}</nuxt-link
                                                    >
                                                </div>
                                            </div>
                                            <div class="box cat">
                                                <h3 class="key">
                                                    {{ $t('onecat') }}
                                                </h3>
                                                <div class="link">
                                                    <nuxt-link
                                                        v-for="cat in anime.category"
                                                        :key="cat"
                                                        to="/"
                                                        >{{
                                                            cat[
                                                                `name${$i18n.locale}`
                                                            ]
                                                        }}</nuxt-link
                                                    >
                                                </div>
                                            </div>
                                            <div class="box-line">
                                                <h3 class="key">Yil</h3>
                                                <h3 class="value">
                                                    {{ anime.year }}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="viewSeria != null">
                                        <a
                                            target="_blank"
                                            :href="viewSeria.url"
                                            class="btn-simple down"
                                        >
                                            <span>
                                                <fa icon="download" />
                                            </span>
                                            {{ $t('down') }}
                                        </a>
                                    </div>
                                </div>
                                <div
                                    class="item-9 item-md-6"
                                    v-if="viewSeria != null"
                                >
                                    <div class="video">
                                        <iframe
                                            :src="viewSeria.video"
                                            frameborder="0"
                                        ></iframe>
                                        <div
                                            class="down-btn"
                                            v-if="viewSeria != null"
                                        >
                                            <a
                                                target="_blank"
                                                :href="viewSeria.url"
                                                class="btn-simple down"
                                            >
                                                <span>
                                                    <fa icon="download" />
                                                </span>
                                                {{ $t('down') }}
                                            </a>
                                        </div>
                                        <div class="seriyas">
                                            <button
                                                :class="
                                                    indexSeria == index
                                                        ? 'btn-simple active'
                                                        : 'btn-simple'
                                                "
                                                v-for="(item, index) in serial"
                                                :key="item"
                                                @click="clickSeria(item, index)"
                                            >
                                                {{ item.name[$i18n.locale] }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="seriyas">
                                <button
                                    :class="
                                        indexSeria == index
                                            ? 'btn-simple active'
                                            : 'btn-simple'
                                    "
                                    v-for="(item, index) in serial"
                                    :key="item"
                                    @click="clickSeria(item, index)"
                                >
                                    {{ item.name[$i18n.locale] }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="body-id">
                    <div class="body-title">
                        <div class="container">
                            <!-- <h1>Discover</h1> -->
                            <div class="description">
                                <p>{{ anime.description[$i18n.locale] }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="tab-menu">
                        <div class="container">
                            <button
                                :class="
                                    tabIndex == i + 1
                                        ? 'active btn-tab'
                                        : 'btn-tab'
                                "
                                v-for="(item, i) in tabMenu"
                                :key="i"
                                @click="tabClick(i)"
                            >
                                {{ item[$i18n.locale] }}
                            </button>
                        </div>
                        <div class="line"></div>
                    </div>

                    <div class="content-about">
                        <div class="container">
                            <div class="card-row">
                                <div class="item-8 item-md-6">
                                    <div
                                        v-if="tabIndex == 1 && comments != null"
                                        class="comments"
                                    >
                                        <div v-if="$auth.loggedIn">
                                            <div
                                                v-if="comment"
                                                class="write-comment"
                                            >
                                                <div class="form">
                                                    <textarea
                                                        v-model="com.message"
                                                        name=""
                                                        id=""
                                                        rows="6"
                                                        :placeholder="
                                                            $t('izoh')
                                                        "
                                                    ></textarea>
                                                </div>
                                                <div class="send">
                                                    <button
                                                        @click="sendComment"
                                                        class="btn-simple"
                                                    >
                                                        {{ $t('send') }}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="kamentariyala scroll">
                                            <div
                                                class="comment scroll"
                                                v-for="(item, i) in comments"
                                                :key="i"
                                            >
                                                <div class="person">
                                                    <div class="img">
                                                        <img
                                                            :src="
                                                                $cdn +
                                                                item.user.photo
                                                            "
                                                            alt=""
                                                        />
                                                        <!-- <img
                                                        :src="
                                                            'http://amediatv.uz:2000/uploads/' +
                                                            item.user.photo
                                                        "
                                                        alt=""
                                                    /> -->
                                                    </div>
                                                    <div class="name">
                                                        <h4 class="name">
                                                            {{ item.user.name }}
                                                        </h4>
                                                        <p class="date">
                                                            {{
                                                                item.date.slice(
                                                                    0,
                                                                    10
                                                                )
                                                            }},
                                                            {{
                                                                item.date.slice(
                                                                    11,
                                                                    16
                                                                )
                                                            }}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="izoh">
                                                    <p
                                                        v-html="item.message"
                                                    ></p>

                                                    <div
                                                        v-if="$auth.loggedIn"
                                                        class="answer"
                                                    >
                                                        <div
                                                            :class="
                                                                isReply != i
                                                                    ? 'btn'
                                                                    : 'btn-none'
                                                            "
                                                        >
                                                            <button
                                                                @click="
                                                                    clickReply(
                                                                        i
                                                                    )
                                                                "
                                                            >
                                                                <span>
                                                                    <fa
                                                                        icon="reply"
                                                                    />
                                                                </span>
                                                                {{
                                                                    $t('reply')
                                                                }}
                                                            </button>
                                                        </div>

                                                        <div
                                                            v-if="isReply == i"
                                                            v-click-other="
                                                                clickOut
                                                            "
                                                            class="
                                                                write-comment
                                                            "
                                                        >
                                                            <div class="form">
                                                                <textarea
                                                                    name=""
                                                                    id=""
                                                                    rows="6"
                                                                    v-model="
                                                                        commentText
                                                                    "
                                                                    :placeholder="
                                                                        $t(
                                                                            'izoh'
                                                                        )
                                                                    "
                                                                ></textarea>
                                                            </div>
                                                            <div class="send">
                                                                <button
                                                                    @click="
                                                                        sendReplyComment(
                                                                            item.user
                                                                        )
                                                                    "
                                                                    class="
                                                                        btn-simple
                                                                    "
                                                                >
                                                                    {{
                                                                        $t(
                                                                            'send'
                                                                        )
                                                                    }}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="tabIndex == 2" class="creater">
                                        <div class="ijods">
                                            <div class="card-row">
                                                <div
                                                    v-for="(
                                                        item, i
                                                    ) in anime.translator"
                                                    :key="i"
                                                    class="item-4 item-md-6"
                                                >
                                                    <div class="person">
                                                        <div class="img">
                                                            <img
                                                                :src="
                                                                    $cdn +
                                                                    item.image
                                                                "
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div class="name">
                                                            <p>
                                                                {{ item.name }}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="tabIndex == 3" class="kadrlar">
                                        <div class="screens">
                                            <div class="card-row">
                                                <div
                                                    v-for="(item, i) in anime
                                                        .screens.original"
                                                    :key="i"
                                                    class="item-4 item-md-3"
                                                >
                                                    <div class="kadr">
                                                        <img
                                                            :src="$cdn + item"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: this.anime?.name[this.$i18n.locale],
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: this.$t('titmeta'),
                    name: this.$t('titmeta'),
                    content: this.$t('titmeta'),
                },
            ],
        }
    },
    data() {
        return {
            indexSeria: 0,
            viewSeria: null,
            com: {
                message: '',
                season: '',
            },
            tabMenu: [
                {
                    uz: 'Izohlar',
                    ru: 'Комментарии',
                },
                {
                    uz: 'Ijodkorlar',
                    ru: 'Создатели',
                },
                {
                    uz: 'Kadrlar',
                    ru: 'Скриншоты',
                },
            ],
            tabIndex: 1,
            isReply: -1,
            comment: true,
            anime: null,
            comments: null,
            serial: null,
            commentText: '',
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        clickSeria(item, index) {
            this.viewSeria = item
            this.indexSeria = index
        },
        async getData() {
            let anime = await this.$axios.$get(
                'season/' + this.$route.params.id
            )
            this.anime = anime.data
            // if ((anime.tip = 'serial')) {
            //     let serial = await this.$axios.$get(
            //         'season/seriya/one/' + this.$route.params.id
            //     )
            // }
            this.serial = anime.seria.reverse()

            this.viewSeria = this.serial[0]
            this.comments = anime.comment
            // console.log('serial', this.serial)
            // console.log('comments', this.comments)
        },
        tabClick(i) {
            this.tabIndex = i + 1
        },
        clickReply(index) {
            this.isReply = index
        },
        async sendReplyComment(item) {
            console.log('xxx', item)

            this.commentText = `<b class="bold"> ${item.name} </b>, ${this.commentText}`
            await this.$axios
                .$post('comment/add', this.commentText)
                .then((res) => {
                    this.commentText = ''
                    this.isReply = -1
                    this.comment = true
                    console.log(res)
                })
                .catch((err) => {
                    console.log('error')
                })
        },
        async sendComment() {
            this.com.season = this.$route.params.id
            await this.$axios.$post('comment/add', this.com)
            this.getData()
        },
        clickOut() {
            if (this.commentText === '') {
                this.isReply = -1
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.seriyas {
    margin-top: 35px;
    button {
        margin-right: 10px;
        margin-bottom: 10px;
        background: transparent;
        width: 100px;
        &.active {
            background: $gc !important;
            color: #fff;
        }
    }
}
.content-about {
    margin: 40px 0;
    .creater {
        .ijods {
            .person {
                background: #fff;
                padding: 10px;
                border-radius: 10px;
                margin-bottom: 20px;
                display: flex;
                align-items: center;
                box-shadow: 0 0 1px 0px #333;
                .img {
                    width: 70px;
                    height: 70px;
                    margin-right: 15px;
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 50%;
                    }
                }
                .name {
                    p {
                        font-size: 18px;
                    }
                }
            }
        }
    }
    .screens {
        .kadr {
            margin-bottom: 20px;
            img {
                border-radius: 10px;
                height: 300px;
                object-fit: cover;
                width: 100%;
            }
        }
    }
    .comments {
        .reply {
            margin-bottom: 10px;
        }
        .write-comment {
            padding: 20px;
            padding-bottom: 0 !important;
            border-radius: 10px;
            background: #fff;
            box-shadow: 0 0 12px -10px #000;
            margin-bottom: 20px;
            .send {
                margin-top: 10px;
                display: flex;
                justify-content: flex-end;
            }
            .form {
                textarea {
                    padding: 10px;
                    border: 1px solid #d9d9d9;
                    width: 100%;
                    &:focus {
                        outline: 1px solid $gc;
                    }
                }
            }
        }
        .kamentariyala {
            // max-height: 700px;
            // overflow-y: scroll;
        }
        .comment {
            margin-bottom: 20px;

            .izoh {
                border-radius: 0 10px 10px 10px;
                padding: 20px;
                background: #fff;
                box-shadow: 0 0 12px -10px #000;
                p {
                    font-size: 16px;
                    line-height: 26px;
                }
                .answer {
                    display: block;
                    .write-comment {
                        padding: 20px 0;
                        box-shadow: none;
                        margin-bottom: 0px;
                    }
                    .btn {
                        display: flex;
                        justify-content: flex-end;
                    }
                    .btn-none {
                        display: none;
                    }
                }
            }
            .person {
                margin-bottom: 5px;
                display: flex;
                align-items: center;
                .img {
                    width: 40px;
                    height: 40px;
                    margin-right: 10px;
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 3px;
                    }
                }
                .name {
                    h4 {
                        color: #333;
                    }
                    p {
                        font-size: 12px;
                        color: rgba(29, 28, 28, 0.6);
                        line-height: 20px;
                        font-weight: 400;
                    }
                }
            }
        }
    }
}
.body-id {
    margin-bottom: 80px;
    .body-title {
        margin: 30px 0;
        .description {
            font-size: 20px;
            color: #333;
            line-height: 26px;
        }
    }
}
.tab-menu {
    .line {
        width: 100%;
        height: 1px;
        background: #d9d9d9;
        z-index: -1;
    }
    button {
        // color: ;
        transition: all 0.3s;
        font-weight: 500;
        font-size: 17px;
        margin-right: 25px;
        padding: 15px 0px 15px 0;
        position: relative;
        &:first-child {
            padding-left: 0;
        }
        &.active {
            font-weight: 500;
            color: $gc;
        }
        &:hover {
            font-weight: 500;
            color: $gc;
        }
        &.active::after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            width: 100%;
            height: 3px;
            background: $gc;
        }
    }
}
.id {
    .season {
        .title-top {
            margin-bottom: 20px;
            h1 {
                font-size: 35px;
                color: #fff;
                font-weight: 500;
            }
        }
        .top {
            top: 0;
            left: 0;
            width: 100%;
            height: fit-content;
            position: relative;

            .video {
                iframe {
                    width: 100%;
                    min-height: 400px;
                    border-radius: 10px;
                }
                .down-btn {
                    display: none;
                }
                .seriyas {
                    display: none;
                }
            }
            .info-film {
                // backdrop-filter: blur(10px);
                .title {
                    color: #fff;
                    h2 {
                        font-weight: 400;
                        margin-bottom: 20px;
                    }
                }
                .folder,
                .cat {
                    .link {
                        margin-top: 10px;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: flex-end;
                        max-width: 80%;
                        a {
                            margin-right: 5px;
                            border-radius: 4px;
                            color: $gc;
                            transition: 0.2s;
                            margin-bottom: 5px;
                            padding: 0 1px;
                            &:hover {
                                color: #fff;
                                background: $gc;
                            }
                        }
                    }
                }
                .box-line {
                    padding-bottom: 5px;
                    border-bottom: 1px solid rgb(80, 80, 80);
                    margin-top: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    &:last-child {
                        border: 0;
                    }
                    h3.key {
                        color: #fff;
                        font-weight: 500;
                        font-size: 15px;
                        span {
                            color: $gc;
                            margin-right: 5px;
                        }
                    }
                    h3.value {
                        color: #fff;
                        font-size: 16px;
                        font-weight: 400;
                        max-width: 78%;
                        text-align: right;
                    }
                }
                .box {
                    padding-bottom: 5px;
                    border-bottom: 1px solid rgb(80, 80, 80);
                    margin-top: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    &:last-child {
                        border: 0;
                    }
                    h3.key {
                        color: #fff;
                        font-weight: 500;
                        font-size: 15px;
                        span {
                            color: $gc;
                            margin-right: 5px;
                        }
                    }
                    h3.value {
                        margin-top: 5px;
                        font-size: 16px;
                        font-weight: 400;
                        margin-left: 30px;
                    }
                }
            }
            .opacity-banner {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #000;
                opacity: 0.94;
                z-index: -1;
            }
            .info {
                // position: absolute;
                width: 100%;
                height: 100%;
                z-index: 3;
                padding: 20px 0;
                a.down {
                    margin-top: 30px;
                    width: 100%;
                    background: $gc;
                    color: #fff;
                    text-align: center;
                    display: block;
                    position: relative;
                    span {
                        position: absolute;
                        opacity: 0;
                        left: 25%;
                        top: 0px;
                        transition: 0.2s;
                    }

                    &:hover {
                        span {
                            top: 6px;
                            margin-top: 0px;
                            opacity: 1;
                        }
                    }
                }
            }
            img.back {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -2;
            }
        }
    }
}
@media (max-width: 576px) {
    .id {
        .ijods {
            .person {
                box-shadow: 0 0 10px -8px #333 !important;
            }
        }
        .kadr {
            img {
                height: 180px !important;
            }
        }
        .item-3 {
            .down {
                display: none !important;
            }
        }
        .seriyas {
            display: none !important;
        }
        .video {
            .seriyas {
                display: block !important;
                margin-bottom: 10px;
                button {
                    width: 86px !important;
                    font-size: 12px !important;
                    margin-right: 4px !important;
                    margin-bottom: 6px !important;
                }
            }
            .down-btn {
                display: block !important;
            }
        }
        .top {
            .info {
                .title-top {
                    h1 {
                        font-weight: 500;
                        font-size: 22px;
                    }
                }
                .card-row {
                    flex-direction: column-reverse;
                }
            }
        }
    }
}
</style>
