import pageSectionTitle from './page-section.js';


const staffCard = {
    props: {
        name: String,
        personalPhotoURL: {
            type: String,
            default: 'imgs/jack-anstey-XVoyX7l9ocY-unsplash.jpg'
        },
        publicTransitPhotoURL: {
            type: String,
            default: 'imgs/jack-anstey-XVoyX7l9ocY-unsplash.jpg'
        },
    },
    data: function() {
        return {
            showPersonalPhoto: false,
        };
    },
    computed: {
        id: function() {
            return this.name.toLowerCase().replace(' ', '-');
        },
        alt: function() {
            return `${this.showPersonalPhoto ? 'staff': 'public transit'} photo of ${this.name}`;
        },
    },
    template: `
        <div
          :id="id"
          class="card text-center mx-5"
          style="width: 20%"
          @mouseenter.passive="showPersonalPhoto = true"
          @mouseleave.passive="showPersonalPhoto = false"
        >
            <img
                :src="showPersonalPhoto ? personalPhotoURL: publicTransitPhotoURL"
                class="card-img-top"
                :alt="alt"
            >
            <div class="card-body">
                <h5 class="card-title">
                    {{ this.name }}
                </h5>
            </div>
        </div>
    `
};


const staffGroup = {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
        title: String,
        members: Array,
        staffNames: Array,
        staffPersonalPhotos: Array,
        staffPublicTransitPhotos: Array,
    },
    components: {
        'page-section-title': pageSectionTitle,
        'staff-card': staffCard,
    },
    template: `
        <section class="container-fluid d-flex flex-wrap flex-column my-5 px-5">
            <page-section-title
              :icon-classes="curPageIconClasses"
              :text="title"
              :style-object="{'color': curPageThemeColor}"
              :text-style-object="{'text-decoration': 'overline dashed','border-top': 'solid medium', 'padding-top': '0.05rem'}"
            >
            </page-section-title>
            <div
              class="d-flex flex-row flex-wrap justify-content-center"
              :style="{ color: curPageThemeColor, 'font-size': 'larger' }"
            >
                <staff-card
                  v-for="(member, index) of members"
                  :key="index"
                  v-bind="member"
                >
                </staff-card>
            </div>
        </section>
    `,
};


Vue.component('page-content', {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'staff-group': staffGroup,
    },
    data: function() {
        return {
            titles: ['the professor', 'the HTAs', 'the UTAs'],
            groups: [
                [
                    {
                        name: 'Philip Klein',
                        personalPhotoURL: 'staff/prof_klein.jpg',
                        publicTransitPhotoURL: 'staff/prof_klein_transit.jpg',
                    },
                ],
                [
                    {
                        name: 'Jason Zagorski',
                        personalPhotoURL: 'staff/jason_personal.png',
                        publicTransitPhotoURL: 'staff/jason_transit.jpg',
                    },
                    {
                        name: 'Archer Wheeler',
                        // personalPhotoURL: '',
                        // publicTransitPhotoURL: '',
                    },
                ],
                [
                    {
                        name: 'Da Huo',
                        personalPhotoURL: 'staff/da-personal.jpg',
                        publicTransitPhotoURL: 'staff/da_transit.jpg',
                    },
                    {
                        name: 'Galadriel Brady',
                        personalPhotoURL: 'staff/galadriel-personal.jpg',
                        publicTransitPhotoURL: 'staff/galadriel_transit.png',
                    },
                    {
                        name: 'Justin Cardozo',
                        personalPhotoURL: 'staff/justin_cardozo.jpg',
                        publicTransitPhotoURL: 'staff/justin_c_transit.jpg',
                    },
                    {
                        name: 'Justin Zhang',
                        personalPhotoURL: 'staff/justin_zhang.jpg',
                        publicTransitPhotoURL: 'staff/justin_z_transit.jpg',
                    },
                    {
                        name: 'Rigel Galgana',
                        // personalPhotoURL: '',
                        // publicTransitPhotoURL: '',
                    },
                    {
                        name: 'Yash Gotmare',
                        personalPhotoURL: 'staff/yash_personal.png',
                        publicTransitPhotoURL: 'staff/yash_transit.jpg',
                    },
                    {
                        name: 'Zhengyi Peng',
                        // personalPhotoURL: '',
                        // publicTransitPhotoURL: '',
                    },
                ],
            ]
        };
    },
    mounted: function() {
        const element = this.$el;
        document.addEventListener('DOMContentLoaded', function() {
            element.scrollIntoView(true);
            window.scrollBy(0, -150);
        }, false);
    },
    template: `
        <main>
            <staff-group
                v-for="(title, index) of titles"
                :key="index"
                :cur-page-theme-color="curPageThemeColor"
                :cur-page-icon-classes="curPageIconClasses"
                :title="title"
                :members="groups[index]"
            >
            </staff-group>
        </main>
    `
});