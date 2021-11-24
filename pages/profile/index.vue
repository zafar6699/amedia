<template>
    <div>
        <div class="profile-page">
            <div class="container">
                <div class="profile-header flex">
                    <div class="left">
                        <div class="person">
                            <div class="img">
                                <img src="@/assets/img/avatar.jpg" alt="" />
                            </div>
                            <div class="name">
                                <h3>Xushnudbek</h3>
                                <h4>id : <span>11221</span></h4>
                            </div>
                        </div>
                        <div class="tab-menu">
                            <button
                                :class="
                                    tabIndex == 1 ? 'active btn-tab' : 'btn-tab'
                                "
                                @click="clickTab(1)"
                            >
                                <span><fa icon="user" /></span> Profil
                            </button>
                            <button
                                :class="
                                    tabIndex == 2 ? 'active btn-tab' : 'btn-tab'
                                "
                                @click="clickTab(2)"
                            >
                                <span><fa icon="heart" /></span> Tanlanganlar
                            </button>
                            <button
                                :class="
                                    tabIndex == 3 ? 'active btn-tab' : 'btn-tab'
                                "
                                @click="clickTab(3)"
                            >
                                <span><fa icon="cog" /></span> Sozlamalar
                            </button>
                        </div>
                    </div>
                    <div class="right">
                        <button class="">
                            Chiqish <span><fa icon="sign-out-alt" /></span>
                        </button>
                    </div>
                </div>
                <div class="content">
                    <div class="profil" v-if="tabIndex == 1">
                        <div class="top">
                            <div class="card-row">
                                <div class="item-3">
                                    <div class="box">
                                        <p>1 Oylik</p>
                                        <div class="price">
                                            <h2>10 900</h2>
                                            <button class="btn-simple">
                                                Obuna
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-3">
                                    <div class="box">
                                        <p>3 Oylik</p>
                                        <div class="price">
                                            <h2>29 900</h2>
                                            <button class="btn-simple">
                                                Obuna
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-3">
                                    <div class="box">
                                        <p>6 Oylik</p>
                                        <div class="price">
                                            <h2>56 000</h2>
                                            <button class="btn-simple">
                                                Obuna
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-3">
                                    <div class="box">
                                        <p>10 Oylik</p>
                                        <div class="price">
                                            <h2>102 000</h2>
                                            <button class="btn-simple">
                                                Obuna
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bottom">
                            <div class="card-row">
                                <div class="item-6">
                                    <div class="card">
                                        <p>10 Oylik</p>
                                        <div class="price">
                                            <h2>102 000</h2>
                                            <span><fa icon="star" /></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-6">
                                    <div class="card">
                                        <p>My balance</p>
                                        <div class="price">
                                            <h2>95 000</h2>
                                            <span><fa icon="star" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="profil" v-if="tabIndex == 2">
                        <div class="like">
                            <div class="card-row">
                                <div class="item-3">
                                    <AnimeCard />
                                </div>
                                <div class="item-3">
                                    <AnimeCard />
                                </div>
                                <div class="item-3">
                                    <AnimeCard />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="profil" v-if="tabIndex == 3">
                        <div class="settings">
                            <div class="card-row">
                                <div class="item-6">
                                    <div class="card">
                                        <div class="card-row">
                                            <div class="item-6">
                                                <div class="input-form">
                                                    <p>Ismi</p>
                                                    <input
                                                        type="text"
                                                        value="Xushnudbek"
                                                    />
                                                </div>
                                            </div>
                                            <div class="item-6">
                                                <div class="input-form">
                                                    <p>Email</p>
                                                    <input
                                                        type="text"
                                                        value="Xushnudbek"
                                                    />
                                                </div>
                                            </div>
                                            <div class="item-6">
                                                <div class="input-form">
                                                    <p>Telefon</p>
                                                    <input
                                                        type="text"
                                                        value="Xushnudbek"
                                                    />
                                                </div>
                                            </div>
                                            <div class="item-6">
                                                <div class="input-form">
                                                    <p>Login</p>
                                                    <input
                                                        type="text"
                                                        value="Xushnudbek"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="save">
                                            <button>Saqlash</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-6">
                                    <div class="card">
                                        <div class="card-row">
                                            <div class="item-6">
                                                <div class="input-form">
                                                    <p>Login</p>
                                                    <input
                                                        type="text"
                                                        value="Xushnudbek"
                                                    />
                                                </div>
                                            </div>
                                            <div class="item-6">
                                                <div class="input-form">
                                                    <p>Login</p>
                                                    <input
                                                        type="text"
                                                        value="Xushnudbek"
                                                    />
                                                </div>
                                            </div>
                                            <div class="item-6">
                                                <div class="input-form">
                                                    <p>Login</p>
                                                    <input
                                                        type="text"
                                                        value="Xushnudbek"
                                                    />
                                                </div>
                                            </div>
                                            <div class="item-6">
                                                <div class="input-form">
                                                    <p>Login</p>
                                                    <input
                                                        type="text"
                                                        value="Xushnudbek"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="save">
                                            <button>Saqlash</button>
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
import AnimeCard from '../../components/AnimeCard.vue'
export default {
    layout: 'dashboard',
    data() {
        return {
            tabMenu: [
                {
                    uz: 'Profil',
                    ru: 'Profil',
                },
                {
                    uz: 'Tanlanganlar',
                    ru: 'Profil',
                },
                {
                    uz: 'Sozlamalar',
                    ru: 'Profil',
                },
            ],
            tabIndex: 1,
        }
    },
    methods: {
        clickTab(i) {
            this.tabIndex = i
        },
    },
    components: { AnimeCard },
}
</script>

<style lang="scss" scoped>
.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.profile-page {
    margin-bottom: 60px;
    .profile-header {
        margin: 30px 0;
        background: #fff;
        // box-shadow: 0 0 3px;
        border-radius: 10px;
        padding: 0 20px;
        .right {
            // color: ;
            button {
                padding: 10px 20px;
                cursor: pointer;
                border-radius: 10px;
                font-size: 14px;
                transition: 0.2s;
                &:hover {
                    background: $gc;
                    color: #fff;
                    span {
                        color: #fff;
                    }
                }
            }
            span {
                margin-left: 5px;
                color: $gc;
            }
        }
        .left {
            display: flex;
            align-items: center;
            .person {
                display: flex;
                align-items: center;
                .name {
                    margin-left: 15px;
                    h3 {
                        font-weight: 600;
                        // color: ;
                        font-weight: 500;
                    }
                    h4 {
                        font-weight: 500;
                        // color: ;
                        font-weight: 500;
                    }
                }
                .img {
                    img {
                        width: 50px;
                        height: 50px;
                        border-radius: 5px;
                        object-fit: cover;
                    }
                }
            }
            .tab-menu {
                margin-left: 30px;
                display: flex;
                button {
                    // color: ;
                    height: 80px;
                    margin-left: 20px;
                    transition: all 0.3s;
                    font-weight: 400;
                    font-size: 17px;
                    &.active {
                        color: $gc;
                    }
                    &:hover {
                        color: $gc;
                    }
                }
            }
        }
    }
    .content {
        .profil {
            .top {
                margin-bottom: 20px;
                .box {
                    background: #fff;
                    // box-shadow: 0 0 3px;
                    padding: 20px;
                    border-radius: 10px;
                    transition: 0.2s;
                    &:hover {
                        box-shadow: 0 0 10px 0px $gc;
                    }
                    p {
                        // color: ;
                        margin-bottom: 5px;
                    }
                    .price {
                        display: flex;
                        justify-content: space-between;

                        h2 {
                            // color: ;
                        }
                        span {
                            font-size: 24px;
                            color: $gc;
                        }
                    }
                }
            }
            .bottom {
                margin-bottom: 20px;
                .card {
                    background: #fff;
                    // box-shadow: 0 0 3px;
                    padding: 20px;
                    border-radius: 10px;
                }
            }
        }
    }
    .settings {
        .card {
            background: #fff;
            // box-shadow: 0 0 3px;
            padding: 20px;
            border-radius: 10px;
            .input-form {
                p {
                    // color: ;
                    margin-bottom: 5px;
                }
                input {
                    // background: ;
                }
            }
            .save {
                display: flex;
                justify-content: flex-end;
                button {
                    background: $gc;
                    padding: 10px 20px;
                    border-radius: 10px;
                    // color: ;
                }
            }
        }
    }
}
</style>
