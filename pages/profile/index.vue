<template>
    <div>
        <div class="profile-page">
            <div @click="closeModal" v-if="isName" class="fixvh"></div>
            <div v-if="isName" class="modal-card" style="width: 400px">
                <div class="modal-title">
                    <h2>Ism o'zgartirish</h2>
                    <button @click="closeModal">
                        <fa class="times" icon="times" />
                    </button>
                </div>

                <div class="modal-body">
                    <div
                        class="input-form"
                        :class="{ 'form-error': $v.user.name.$error }"
                    >
                        <input
                            v-model="$v.user.name.$model"
                            type="text"
                            :placeholder="$t('ism')"
                        />
                        <h6 v-if="!$v.user.name.required" class="error-text">
                            {{ $t('tolshart') }}
                        </h6>
                    </div>

                    <div>
                        <button
                            class="btn-sm mb-15 w-100 btn-sm-active"
                            @click="editName"
                        >
                            O'zgartirish
                        </button>
                    </div>
                </div>
            </div>

            <div @click="closeModal" v-if="isBalance" class="fixvh"></div>
            <div v-if="isBalance" class="modal-card" style="width: 400px">
                <div class="modal-title">
                    <h2>Balans to'ldirish</h2>
                    <button @click="closeModal">
                        <fa class="times" icon="times" />
                    </button>
                </div>

                <div class="modal-body">
                    <div
                        class="input-form"
                        :class="{ 'form-error': $v.balance.$error }"
                    >
                        <input
                            v-model="$v.balance.$model"
                            type="text"
                            :placeholder="'Summani kiriting'"
                            v-mask="'##########'"
                        />
                        <h6 v-if="!$v.balance.required" class="error-text">
                            {{ $t('tolshart') }}
                        </h6>
                    </div>

                    <div>
                        <button
                            class="btn-sm mb-15 w-100 btn-sm-active"
                            @click="editName"
                        >
                            To'lash
                        </button>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="profile-header">
                    <div class="left">
                        <div class="person">
                            <div class="image-div">
                                <label for="image" class="upload-button">
                                    <input
                                        @change="changeImage($event)"
                                        type="file"
                                        id="image"
                                    />

                                    <span>
                                        <fa icon="pen" />
                                    </span>
                                </label>
                                <div class="img">
                                    <img
                                        v-if="$auth.user.photo != undefined"
                                        :src="$cdn + `/` + $auth.user.photo"
                                        alt=""
                                    />
                                    <img
                                        src="@/static/default-profile.png"
                                        alt=""
                                    />
                                </div>
                            </div>

                            <div class="name">
                                <h3>
                                    {{ $auth.user.name }}
                                    <button
                                        class="edit-btn"
                                        @click="isName = true"
                                    >
                                        <fa icon="edit" />
                                    </button>
                                </h3>
                                <h4>
                                    <span class="key">ID</span> :
                                    <span>{{ $auth.user.uid }}</span>
                                </h4>
                                <h4>
                                    <span class="key">Balans</span> :
                                    <span
                                        >{{ $auth.user.balance }}
                                        {{ $t('sum') }}
                                    </span>
                                </h4>
                                <h4>
                                    <span class="key">Tarif tugash sanasi</span>
                                    :
                                    <span>12.10.2021 </span>
                                </h4>
                                <button
                                    class="btn-simple mt-10"
                                    @click="isBalance = true"
                                >
                                    Balansni to'ldirish
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <button class="" @click="$auth.logout()">
                            Chiqish <span><fa icon="sign-out-alt" /></span>
                        </button>
                    </div>
                </div>

                <div class="tab-menu">
                    <button
                        :class="tabIndex == 1 ? 'active btn-tab' : 'btn-tab'"
                        @click="clickTab(1)"
                    >
                        <span class="let"> Profil </span>
                    </button>
                    <button
                        :class="tabIndex == 2 ? 'active btn-tab' : 'btn-tab'"
                        @click="clickTab(2)"
                    >
                        <span class="let"> Tanlanganlar </span>
                    </button>
                </div>
                <div class="content">
                    <div class="profil" v-if="tabIndex == 1">
                        <div class="top">
                            <div class="card-row">
                                <div class="item-3 item-md-3">
                                    <div class="box">
                                        <p>1 Oylik</p>
                                        <div class="price">
                                            <h2>10 900 {{ $t('sum') }}</h2>
                                            <button class="btn-simple">
                                                Obuna
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-3 item-md-3">
                                    <div class="box">
                                        <p>3 Oylik</p>
                                        <div class="price">
                                            <h2>29 900 {{ $t('sum') }}</h2>
                                            <button class="btn-simple">
                                                Obuna
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-3 item-md-3">
                                    <div class="box">
                                        <p>6 Oylik</p>
                                        <div class="price">
                                            <h2>56 000 {{ $t('sum') }}</h2>
                                            <button class="btn-simple">
                                                Obuna
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-3 item-md-3">
                                    <div class="box">
                                        <p>10 Oylik</p>
                                        <div class="price">
                                            <h2>102 000 {{ $t('sum') }}</h2>
                                            <button class="btn-simple">
                                                Obuna
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="profil" v-if="tabIndex == 2">
                        <div class="like">
                            <div class="card-row">
                                <div
                                    class="item-3"
                                    v-for="(item, index) in $store.state.like"
                                    :key="index"
                                >
                                    <AnimeCard :anime="item.season" />
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
import { required } from 'vuelidate/lib/validators'
import AnimeCard from '../../components/AnimeCard.vue'
export default {
    layout: 'dashboard',
    data() {
        return {
            isName: false,
            isBalance: false,
            tabMenu: [
                {
                    uz: 'Profil',
                    ru: 'Profil',
                },
                {
                    uz: 'Tanlanganlar',
                    ru: 'Profil',
                },
            ],
            tabIndex: 1,

            user: {
                name: '',
            },
            balance: '',
        }
    },

    validations: {
        user: {
            name: {
                required,
            },
        },
        balance: {
            required,
        },
    },
    async mounted() {
        this.user.name = this.$auth.user.name
    },
    methods: {
        clickTab(i) {
            this.tabIndex = i
        },
        closeModal() {
            this.isName = false
            this.isBalance = false
        },
        changeImage(event) {
            let fd = new FormData()
            fd.append('photo', event.target.files[0])

            this.$axios({
                url: 'profile/upload',
                method: 'POST',
                data: fd,
            }).then((res) => {
                this.$auth.fetchUser()
            })
        },
        editName() {},
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
    .tab-menu {
        display: flex;
        margin-bottom: 30px;
        border-bottom: 1px solid #ddd;
        padding-bottom: 5px;
        button {
            // color: ;
            height: 40px;
            transition: all 0.3s;
            margin-right: 30px;
            font-weight: 500;
            font-size: 17px;
            &.active {
                color: $gc;
                // border-bottom: 1px solid $gc;
            }
            &:hover {
                color: $gc;
            }
        }
    }
    .profile-header {
        margin: 30px 0;
        background: #fff;
        // box-shadow: 0 0 3px;
        border-radius: 10px;
        padding: 20px;
        display: flex;
        justify-content: space-between;
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
                .edit-btn {
                    font-size: 16px;
                    color: #333;
                    margin-left: 10px;

                    &:hover {
                        color: $gc;
                    }
                }
                .name {
                    margin-left: 15px;
                    span.key {
                        font-weight: 500;
                        color: #333;
                    }
                    h3 {
                        font-weight: 600;
                        // color: ;
                        font-weight: 500;
                    }
                    h4 {
                        font-weight: 500;
                        // color: ;
                        font-weight: 400;
                        color: #666;
                    }
                }
                .img {
                    width: 135px;
                    height: 135px;
                    border-radius: 5px;
                    overflow: hidden;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }

                .image-div {
                    position: relative;
                }
                .upload-button {
                    position: absolute;
                    bottom: 5px;
                    right: 5px;
                    width: 30px;
                    height: 30px;
                    background-color: #fff;
                    color: $gc;
                    font-size: 16px;
                    border-radius: 100%;
                    border: 1px solid $gc;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;

                    &:hover {
                        background-color: $gc;
                        color: #fff;
                    }
                    input {
                        border-radius: 5px;
                        overflow: hidden;
                        position: absolute;
                        opacity: 0;
                        transform: translate(-1000%);
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
                        box-shadow: 0 0 10px 0px #ddd;
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
@media (max-width: 576px) {
    .profile-page {
        .profile-header {
            .left {
                .tab-menu {
                    margin-left: 10px;
                    button {
                        span.let {
                            display: none;
                        }
                    }
                }
            }
        }
        .content {
            .profil {
                .top {
                    .box {
                        padding: 10px;
                        margin-bottom: 15px;
                        .price {
                            button {
                                padding: 3px 8px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
