import pageClickCopy from './page-click-copy.js';
import pageSectionTitle from './page-section.js';

const csPrereq = {
    props: {
        courseNum: String,
        backgroundColor: String,
    },
    computed: {
        id: function () {
            return `prereq-csci${this.courseNum}`;
        },
        href: function () {
            return `https://cs.brown.edu/courses/csci${this.courseNum}`;
        },
    },
    template: `
        <a
          :id="id"
          class="px-4 mx-2 second-prereq badge text-white"
          rel="noreferrer"
          target="_blank"
          :href="href"
          :style="{'background-color': backgroundColor}"
        >
              CSCI {{courseNum}}
        </a>
    `,
};

const courseInfoSection = {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'cs-prereq': csPrereq,
        'page-section-title': pageSectionTitle,
    },
    template: `
        <section class="container-fluid d-flex flex-wrap flex-row my-5 px-0 px-sm-5">
            <page-section-title
              :icon-classes="curPageIconClasses"
              text="course info"
              :style-object="{'color': curPageThemeColor, 'text-decoration-line': 'underline', 'text-decoration-style': 'wavy'}"
            ></page-section-title>
            <div
              class="flex-fill d-flex flex-column ml-4 ml-sm-5"
              :style="{ color: curPageThemeColor, 'font-size': 'larger' }"
            >
                <div id="course-syllabus-container" class="mb-4">
                    <span class="mr-4">
                        <i class="far fa-comment fa-lg" title="course syllabus"></i>
                    </span>
                    <span id="course-syllabus">
                        <a href="content/resources/syllabus.pdf" target="_blank">Syllabus</a>
                    </span>
                </div>
                <div id="gradescope-container" class="mb-4">
                    <span class="mr-4">
                        <i class="far fa-comment fa-lg" title="gradescope"></i>
                    </span>
                    <span id="gradescope">
                        <a href="https://www.gradescope.com/" target="_blank">Gradescope</a>
                    </span>
                </div>
                <div id="ed-container" class="mb-4">
                    <span class="mr-4">
                        <i class="far fa-question fa-lg" title="ed"></i>
                    </span>
                    <span id="ed-info">
                        <a href="https://edstem.org/us/courses/12570/discussion/" target="_blank">Ed Platform</a>
                    </span>
                </div>
                <div id="anonymous-feedback-container" class="mb-4">
                    <span class="mr-4">
                        <i class="far fa-comment fa-lg" title="feedback form"></i>
                    </span>
                    <span id="anoynmous-feedback-form-info">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeKHMRTsAwfGcSTrbGEFco27WQS0OWQvHxCzWVAmEyCsrTK_w/viewform?usp=sf_link" target="_blank">Anonymous Feedback Form</a>
                    </span>
                </div>
                <div id="time-container" class="d-flex flex-row mb-4">
                      <span class="mr-4">
                          <i class="far fa-calendar-alt fa-lg" title="class time"></i>
                      </span>
                      <div>
                          <p id="class-time" class="d-flex flex-row justify-content-between mb-1">
                              <span id="time-start">2:30PM</span>
                              <span class="d-sm-inline-block d-sm-none mx-2">--</span>
                              <span id="time-end">3:50PM</span>
                              <span id="time-duration" class="d-none d-sm-inline-block font-weight-light text-muted mx-1 px-4 border-bottom">1Hr 20Mins</span>
                          </p>
                          <p id="day-of-week-badges" class="d-flex flex-column flex-sm-row ">
                              <span id="time-tuesday" class="mx-2 mb-2 mb-sm-0 px-4 day-of-week badge badge-pill text-white" :style="{'background-color': curPageThemeColor}">T</span>
                              <span id="time-thursday" class="mx-2 mb-2 mb-sm-0 px-4 day-of-week badge badge-pill text-white" :style="{'background-color': curPageThemeColor}">Th</span>
                          </p>
                      </div>
                  </div>
                  <div id="location-container" class="mb-4">
                      <span class="mr-4">
                          <i class="far fa-building fa-lg" title="location"></i>
                      </span>
                      <span id="class-location">
                          85 Waterman Street Room 130
                      </span>
                  </div>
            </div>
        </section>
    `,
};

const courseTopic = {
    props: {
        week: String,
        name: String,
        curPageThemeColor: String,
    },
    components: {
        'page-click-copy': pageClickCopy,
    },
    template: `
        <li
          class="list-group-item list-group-item-action border-0 border-left"
          :style="{color: curPageThemeColor}"
        >
            <span class="topic-week font-weight-light">{{week}}: </span>
            <page-click-copy :text="name"></page-click-copy>
        </li>
    `,
};

const courseMaterialSection = {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'page-section-title': pageSectionTitle,
    },
    template: `
        <section class="container-fluid d-flex flex-wrap flex-row my-5 px-0 px-sm-5">
            <page-section-title
              :icon-classes="curPageIconClasses"
              text="course material"
              :style-object="{'color': curPageThemeColor, 'text-decoration-line': 'underline', 'text-decoration-style': 'wavy'}"
            ></page-section-title>
            <div
              class="flex-fill d-flex flex-column ml-4 ml-sm-5"
              :style="{ color: curPageThemeColor, 'font-size': 'larger' }"
            >
                <div class="d-flex flex-row mb-4">
                    <span class="mr-4">
                        <i class="fas fa-book fa-lg" title="textbook"></i>
                    </span>
                    <span>
                        <div
                          id="textbook-container"
                          class="d-flex flex-column">
                            <span>
                                Algorithm Design and Applications
                                <span class="text-muted font-weight-light" style="font-size: small">
                                    by Goodrich and Tamassia
                                </span>
                            </span>
                            <ul class="list-inline ml-2">
                                <li class="list-inline-item">
                                    <a
                                      href="https://www.amazon.com/Algorithm-Design-Applications-Michael-Goodrich/dp/1118335910"
                                      title="Buy from Amazon"
                                      rel="noreferrer"
                                      target="_blank"
                                      class="mx-2 font-weight-light"
                                       style="font-size: smaller"
                                    >
                                        <i class="fab fa-amazon"></i>
                                        Buy from Amazon
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a
                                      href="https://insite.browntextbook.com/CourseMaterials?Ids=10751730"
                                      title="Buy from Brown Bookstore"
                                      rel="noreferrer"
                                      target="_blank"
                                      class="mx-2 font-weight-light"
                                       style="font-size: smaller"
                                    >
                                        <i class="fas fa-store"></i>
                                        Buy from Brown Bookstore
                                  </a>
                                </li>
                            </ul>
                        </div>
                    </span>
                </div>
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
        'course-info-section': courseInfoSection,
        'course-material-section': courseMaterialSection,
    },
    template: `
        <main>
            <course-info-section
                :cur-page-theme-color="curPageThemeColor"
                :cur-page-icon-classes="curPageIconClasses"
            >
            </course-info-section>
            <course-material-section
                :cur-page-theme-color="curPageThemeColor"
                :cur-page-icon-classes="curPageIconClasses"
            >
            </course-material-section>
        </main>
    `,
});
