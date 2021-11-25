<template>
    <div>
        <div class="id">
            <div class="season">
                <div class="top">
                    <img src="@/assets/img/2.jpg" alt="" class="back" />
                    <div class="opacity-banner"></div>
                    <div class="info">
                        <div class="container">
                            <div class="title-top">
                                <h1>
                                    Soqolimni olib, yuqori maktab qizini uyimga
                                    olib keldim [9-13] [18+]
                                </h1>
                            </div>
                            <div class="card-row">
                                <div class="item-3 item-md-6">
                                    <div class="info-film">
                                        <div class="title">
                                            <h2>Ma'lumotlar</h2>
                                            <div class="box-line">
                                                <h3 class="key">Mamlakat</h3>
                                                <h3 class="value">AQSH</h3>
                                            </div>
                                            <div class="box-line">
                                                <h3 class="key">Rejissor</h3>
                                                <h3 class="value">Naruto</h3>
                                            </div>
                                            <div class="box-line">
                                                <h3 class="key">Studiya</h3>
                                                <h3 class="value">
                                                    Lidenfilms
                                                </h3>
                                            </div>
                                            <div class="box folder">
                                                <h3 class="key">Janr</h3>
                                                <div class="link">
                                                    <nuxt-link to="/"
                                                        >Ongoing</nuxt-link
                                                    >
                                                    <nuxt-link to="/"
                                                        >Ongoing</nuxt-link
                                                    >
                                                </div>
                                            </div>
                                            <div class="box cat">
                                                <h3 class="key">Kategoriya</h3>
                                                <div class="link">
                                                    <nuxt-link to="/"
                                                        >Ongoing</nuxt-link
                                                    >
                                                    <nuxt-link to="/"
                                                        >Ongoing</nuxt-link
                                                    >
                                                    <nuxt-link to="/"
                                                        >Ongoing</nuxt-link
                                                    >
                                                </div>
                                            </div>
                                            <div class="box-line">
                                                <h3 class="key">Yil</h3>
                                                <h3 class="value">2022</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-9 item-md-6">
                                    <div class="video">
                                        <iframe
                                            src="https://www.youtube.com/embed/d8YSLthFpTM "
                                            frameborder="0"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="body-id">
                    <div class="body-title">
                        <div class="container">
                            <h1>Discover</h1>
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
                                {{ item.uz }}
                            </button>
                        </div>
                        <div class="line"></div>
                    </div>

                    <div class="content-about">
                        <div class="container">
                            <div class="card-row">
                                <div class="item-8 item-md-6">
                                    <div v-if="tabIndex == 1" class="comments">
                                        <div class="comment">
                                            <div class="person">
                                                <div class="img">
                                                    <img
                                                        src="@/assets/img/avatar.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div class="name">
                                                    <h4 class="name">
                                                        Xushnudbek
                                                    </h4>
                                                    <p class="date">
                                                        30.09.2021,18:34
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="izoh">
                                                <p>
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Consequuntur id iusto
                                                    incidunt aperiam error
                                                    aspernatur?
                                                </p>
                                                <div class="answer">
                                                    <div class="btn">
                                                        <button
                                                            @click="clickReply"
                                                            v-click-other="
                                                                clickOut
                                                            "
                                                        >
                                                            <span>
                                                                <fa
                                                                    icon="reply"
                                                                />
                                                            </span>
                                                            Javob berish
                                                        </button>
                                                    </div>

                                                    <div
                                                        v-if="isReply"
                                                        class="write-comment"
                                                    >
                                                        <div class="form">
                                                            <textarea
                                                                name=""
                                                                id=""
                                                                rows="6"
                                                                placeholder="Izoh..."
                                                            ></textarea>
                                                        </div>
                                                        <div class="send">
                                                            <button
                                                                class="
                                                                    btn-simple
                                                                "
                                                            >
                                                                Jo'natish
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="comment">
                                            <div class="person">
                                                <div class="img">
                                                    <img
                                                        src="@/assets/img/avatar.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div class="name">
                                                    <h4 class="name">
                                                        Xushnudbek
                                                    </h4>
                                                    <p class="date">
                                                        30.09.2021,18:34
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="izoh">
                                                <p>
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Consequuntur id iusto
                                                    incidunt aperiam error
                                                    aspernatur?
                                                </p>
                                                <div class="answer">
                                                    <div class="btn">
                                                        <button
                                                            @click="clickReply"
                                                            v-click-other="
                                                                clickOut
                                                            "
                                                        >
                                                            <span>
                                                                <fa
                                                                    icon="reply"
                                                                />
                                                            </span>
                                                            Javob berish
                                                        </button>
                                                    </div>

                                                    <div
                                                        v-if="isReply"
                                                        class="write-comment"
                                                    >
                                                        <div class="form">
                                                            <textarea
                                                                name=""
                                                                id=""
                                                                rows="6"
                                                                placeholder="Izoh..."
                                                            ></textarea>
                                                        </div>
                                                        <div class="send">
                                                            <button
                                                                class="
                                                                    btn-simple
                                                                "
                                                            >
                                                                Jo'natish
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            v-if="comment"
                                            class="write-comment"
                                        >
                                            <div class="form">
                                                <textarea
                                                    name=""
                                                    id=""
                                                    rows="6"
                                                    placeholder="Izoh..."
                                                ></textarea>
                                            </div>
                                            <div class="send">
                                                <button class="btn-simple">
                                                    Jo'natish
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="tabIndex == 2" class="creater">
                                        <div class="ijods">
                                            <div class="card-row">
                                                <div class="item-4">
                                                    <div class="person">
                                                        <div class="img">
                                                            <img
                                                                src="@/assets/img/avatar.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div class="name">
                                                            <p>LemniSkata</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item-4">
                                                    <div class="person">
                                                        <div class="img">
                                                            <img
                                                                src="@/assets/img/avatar.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div class="name">
                                                            <p>LemniSkata</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item-4">
                                                    <div class="person">
                                                        <div class="img">
                                                            <img
                                                                src="@/assets/img/avatar.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div class="name">
                                                            <p>LemniSkata</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="tabIndex == 3" class="kadrlar">
                                        <div class="screens">
                                            <div class="card-row">
                                                <div class="item-4">
                                                    <div class="kadr">
                                                        <img
                                                            src="@/assets/img/1.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div class="item-4">
                                                    <div class="kadr">
                                                        <img
                                                            src="@/assets/img/1.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div class="item-4">
                                                    <div class="kadr">
                                                        <img
                                                            src="@/assets/img/1.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div class="item-4">
                                                    <div class="kadr">
                                                        <img
                                                            src="@/assets/img/1.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div class="item-4">
                                                    <div class="kadr">
                                                        <img
                                                            src="@/assets/img/1.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div class="item-4">
                                                    <div class="kadr">
                                                        <img
                                                            src="@/assets/img/1.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div class="item-4">
                                                    <div class="kadr">
                                                        <img
                                                            src="@/assets/img/1.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div class="item-4">
                                                    <div class="kadr">
                                                        <img
                                                            src="@/assets/img/1.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div class="item-4">
                                                    <div class="kadr">
                                                        <img
                                                            src="@/assets/img/1.jpg"
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
    data() {
        return {
            tabMenu: [
                {
                    uz: 'Izohlar',
                    ru: 'Izohlar',
                },
                {
                    uz: 'Ijodkorlar',
                    ru: 'Ijodkorlar',
                },
                {
                    uz: 'Kadrlar',
                    ru: 'Kadrlar',
                },
            ],
            tabIndex: 1,
            isReply: false,
            comment: true,
            anime: null,
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        async getData() {
            let anime = await this.$axios.$get(
                'season/' + $this.route.params.id
            )
            this.anime = anime.data
            console.log('anime', this.anime)
        },
        tabClick(i) {
            this.tabIndex = i + 1
        },
        clickReply() {
            this.isReply = true
            this.comment = false
        },
        clickOut() {
            this.isReply = false
            this.comment = true
        },
    },
}
</script>

<style lang="scss" scoped>
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
            border-radius: 10px;
            background: #fff;
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
        .comment {
            margin-bottom: 20px;
            .izoh {
                border-radius: 0 10px 10px 10px;
                padding: 20px;
                background: #fff;
                p {
                    font-size: 16px;
                    line-height: 26px;
                }
                .answer {
                    .btn {
                        display: flex;
                        justify-content: flex-end;
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
            height: 100vh;
            position: relative;
            overflow: hidden;
            .video {
                iframe {
                    width: 100%;
                    min-height: 400px;
                    border-radius: 10px;
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
                        justify-content: space-between;
                        flex-wrap: wrap;
                        max-width: 70%;
                        a {
                            margin-right: 5px;
                            border-radius: 5px;
                            color: $gc;
                            transition: 0.2s;
                            margin-bottom: 5px;
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
            }
            .info {
                position: absolute;
                top: 10%;
                left: 0;
                width: 100%;
                height: 100%;
            }
            img.back {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }
    }
}
@media (max-width: 576px) {
    .id {
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
