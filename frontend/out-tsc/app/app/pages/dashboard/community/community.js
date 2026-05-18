import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/community.service";
import * as i2 from "../../../services/auth.services";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
const _forTrack0 = ($index, $item) => $item._id;
function DashboardCommunityComponent_Conditional_11_For_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 22);
    i0.ɵɵlistener("click", function DashboardCommunityComponent_Conditional_11_For_14_Template_button_click_0_listener() { const tag_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.togglePostTag(tag_r4)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tag_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", ctx_r1.selectedPostTags().includes(tag_r4));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", tag_r4, " ");
} }
function DashboardCommunityComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵlistener("click", function DashboardCommunityComponent_Conditional_11_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.showCreator.set(false)); });
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵlistener("click", function DashboardCommunityComponent_Conditional_11_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(2, "div", 13)(3, "h3");
    i0.ɵɵtext(4, "Create a post");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 14);
    i0.ɵɵlistener("click", function DashboardCommunityComponent_Conditional_11_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.showCreator.set(false)); });
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 15)(8, "div", 16);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "textarea", 17);
    i0.ɵɵlistener("ngModelChange", function DashboardCommunityComponent_Conditional_11_Template_textarea_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.postContent.set($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 18)(12, "div", 19);
    i0.ɵɵrepeaterCreate(13, DashboardCommunityComponent_Conditional_11_For_14_Template, 2, 3, "button", 20, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 21);
    i0.ɵɵlistener("click", function DashboardCommunityComponent_Conditional_11_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.createPost()); });
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.getInitials((ctx_r1.currentUser == null ? null : ctx_r1.currentUser.name) || ""), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngModel", ctx_r1.postContent());
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.postTags);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r1.postContent().trim() || ctx_r1.isPosting());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.isPosting() ? "Posting..." : "Post", " ");
} }
function DashboardCommunityComponent_For_14_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 23);
    i0.ɵɵlistener("click", function DashboardCommunityComponent_For_14_Template_button_click_0_listener() { const tag_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.loadPosts(tag_r6)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tag_r6 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ctx_r1.activeFilter() === tag_r6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", tag_r6, " ");
} }
function DashboardCommunityComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1, "Loading posts...");
    i0.ɵɵelementEnd();
} }
function DashboardCommunityComponent_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1, "No posts yet.");
    i0.ɵɵelementEnd();
} }
function DashboardCommunityComponent_Conditional_17_For_2_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const post_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\u2022 ", post_r8.authorMetadata == null ? null : post_r8.authorMetadata.location);
} }
function DashboardCommunityComponent_Conditional_17_For_2_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const post_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(post_r8.tags[0]);
} }
function DashboardCommunityComponent_Conditional_17_For_2_For_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const comment_r9 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(comment_r9.author.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(comment_r9.content);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(7, 3, comment_r9.createdAt, "short"));
} }
function DashboardCommunityComponent_Conditional_17_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 24)(1, "div", 25)(2, "div", 26);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 27)(5, "div", 28)(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 29);
    i0.ɵɵtext(9);
    i0.ɵɵconditionalCreate(10, DashboardCommunityComponent_Conditional_17_For_2_Conditional_10_Template, 2, 1, "span");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(11, DashboardCommunityComponent_Conditional_17_For_2_Conditional_11_Template, 2, 1, "span", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 31)(13, "p");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 32)(16, "div", 33)(17, "button", 34);
    i0.ɵɵlistener("click", function DashboardCommunityComponent_Conditional_17_For_2_Template_button_click_17_listener() { const post_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.likePost(post_r8._id)); });
    i0.ɵɵelementStart(18, "span", 35);
    i0.ɵɵtext(19, "\u2661");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "span");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "span", 36)(23, "span", 35);
    i0.ɵɵtext(24, "\uD83D\uDCAC");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "span");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "div", 37);
    i0.ɵɵtext(28);
    i0.ɵɵpipe(29, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "div", 38);
    i0.ɵɵrepeaterCreate(31, DashboardCommunityComponent_Conditional_17_For_2_For_32_Template, 8, 6, "div", 39, _forTrack0);
    i0.ɵɵelementStart(33, "div", 40)(34, "input", 41);
    i0.ɵɵlistener("ngModelChange", function DashboardCommunityComponent_Conditional_17_For_2_Template_input_ngModelChange_34_listener($event) { const post_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.updateCommentInput(post_r8._id, $event)); })("keyup.enter", function DashboardCommunityComponent_Conditional_17_For_2_Template_input_keyup_enter_34_listener() { const post_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addComment(post_r8._id)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "button", 42);
    i0.ɵɵlistener("click", function DashboardCommunityComponent_Conditional_17_For_2_Template_button_click_35_listener() { const post_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addComment(post_r8._id)); });
    i0.ɵɵtext(36, "Reply");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const post_r8 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.getInitials(post_r8.author.name), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(post_r8.author.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", (post_r8.authorMetadata == null ? null : post_r8.authorMetadata.university) || "Community member", " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional((post_r8.authorMetadata == null ? null : post_r8.authorMetadata.location) ? 10 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(post_r8.tags.length ? 11 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(post_r8.content);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(post_r8.likes.length);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(post_r8.comments.length);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(29, 10, post_r8.createdAt, "mediumDate"));
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(post_r8.comments);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r1.commentInputs()[post_r8._id] || "");
} }
function DashboardCommunityComponent_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵrepeaterCreate(1, DashboardCommunityComponent_Conditional_17_For_2_Template, 37, 13, "article", 24, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.communityService.posts());
} }
export class DashboardCommunityComponent {
    communityService;
    authService;
    filterTags = ['All posts', 'Visa', 'Admission', 'Life abroad', 'Scholarship', 'Question'];
    postTags = ['Visa', 'Admission', 'Life abroad', 'Scholarship', 'Question'];
    activeFilter = signal('All posts', ...(ngDevMode ? [{ debugName: "activeFilter" }] : /* istanbul ignore next */ []));
    selectedPostTags = signal([], ...(ngDevMode ? [{ debugName: "selectedPostTags" }] : /* istanbul ignore next */ []));
    postContent = signal('', ...(ngDevMode ? [{ debugName: "postContent" }] : /* istanbul ignore next */ []));
    isPosting = signal(false, ...(ngDevMode ? [{ debugName: "isPosting" }] : /* istanbul ignore next */ []));
    isLoading = signal(true, ...(ngDevMode ? [{ debugName: "isLoading" }] : /* istanbul ignore next */ []));
    showCreator = signal(false, ...(ngDevMode ? [{ debugName: "showCreator" }] : /* istanbul ignore next */ []));
    commentInputs = signal({}, ...(ngDevMode ? [{ debugName: "commentInputs" }] : /* istanbul ignore next */ []));
    currentUser;
    constructor(communityService, authService) {
        this.communityService = communityService;
        this.authService = authService;
        this.currentUser = this.authService.getUser();
    }
    ngOnInit() {
        this.loadPosts();
    }
    loadPosts(tag = 'All posts') {
        this.isLoading.set(true);
        this.activeFilter.set(tag);
        this.communityService.getPosts(tag).subscribe({
            next: () => this.isLoading.set(false),
            error: () => this.isLoading.set(false)
        });
    }
    togglePostTag(tag) {
        const current = this.selectedPostTags();
        if (current.includes(tag)) {
            this.selectedPostTags.set(current.filter(t => t !== tag));
        }
        else {
            this.selectedPostTags.set([...current, tag]);
        }
    }
    createPost() {
        if (!this.postContent().trim() || this.isPosting())
            return;
        this.isPosting.set(true);
        this.communityService.createPost(this.postContent(), this.selectedPostTags()).subscribe({
            next: () => {
                this.postContent.set('');
                this.selectedPostTags.set([]);
                this.isPosting.set(false);
                this.showCreator.set(false);
                this.loadPosts(this.activeFilter());
            },
            error: () => this.isPosting.set(false)
        });
    }
    likePost(postId) {
        this.communityService.likePost(postId).subscribe();
    }
    updateCommentInput(postId, value) {
        this.commentInputs.set({ ...this.commentInputs(), [postId]: value });
    }
    addComment(postId) {
        const content = this.commentInputs()[postId];
        if (!content?.trim())
            return;
        this.communityService.addComment(postId, content).subscribe({
            next: () => {
                this.updateCommentInput(postId, '');
            }
        });
    }
    getInitials(name) {
        return name ? name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) : '?';
    }
    static ɵfac = function DashboardCommunityComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardCommunityComponent)(i0.ɵɵdirectiveInject(i1.CommunityService), i0.ɵɵdirectiveInject(i2.AuthService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardCommunityComponent, selectors: [["app-dashboard-community"]], decls: 18, vars: 2, consts: [[1, "community-page"], [1, "community-header"], [1, "header-left"], [1, "create-post-trigger", 3, "click"], [1, "plus-icon"], [1, "modal-overlay"], [1, "filter-bar"], ["type", "button", 1, "filter-pill", 3, "active"], [1, "loading-state"], [1, "empty-state"], [1, "posts-feed"], [1, "modal-overlay", 3, "click"], [1, "post-creator-card", "modal-content", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "creator-top"], [1, "user-avatar"], ["placeholder", "Share your experience or ask a question...", "autofocus", "", 3, "ngModelChange", "ngModel"], [1, "creator-bottom"], [1, "tag-selector"], ["type", "button", 1, "tag-pill", 3, "active"], ["type", "button", 1, "post-button", 3, "click", "disabled"], ["type", "button", 1, "tag-pill", 3, "click"], ["type", "button", 1, "filter-pill", 3, "click"], [1, "post-card"], [1, "post-header"], [1, "user-avatar", "small"], [1, "header-main"], [1, "name-row"], [1, "subtitle"], [1, "post-tag-badge"], [1, "post-body"], [1, "post-footer"], [1, "footer-left"], ["type", "button", 1, "action-btn", 3, "click"], [1, "icon"], [1, "action-btn"], [1, "footer-right"], [1, "post-comments"], [1, "comment-item"], [1, "comment-input-row"], ["type", "text", "placeholder", "Write a comment...", 3, "ngModelChange", "keyup.enter", "ngModel"], ["type", "button", 3, "click"]], template: function DashboardCommunityComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
            i0.ɵɵtext(4, "Community");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p");
            i0.ɵɵtext(6, "Real advice from Nepali students abroad");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "button", 3);
            i0.ɵɵlistener("click", function DashboardCommunityComponent_Template_button_click_7_listener() { return ctx.showCreator.set(true); });
            i0.ɵɵelementStart(8, "span", 4);
            i0.ɵɵtext(9, "+");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(10, " Create Post ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(11, DashboardCommunityComponent_Conditional_11_Template, 17, 4, "div", 5);
            i0.ɵɵelementStart(12, "div", 6);
            i0.ɵɵrepeaterCreate(13, DashboardCommunityComponent_For_14_Template, 2, 3, "button", 7, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(15, DashboardCommunityComponent_Conditional_15_Template, 2, 0, "div", 8)(16, DashboardCommunityComponent_Conditional_16_Template, 2, 0, "div", 9)(17, DashboardCommunityComponent_Conditional_17_Template, 3, 0, "div", 10);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵconditional(ctx.showCreator() ? 11 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.filterTags);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.isLoading() ? 15 : !ctx.communityService.posts().length ? 16 : 17);
        } }, dependencies: [CommonModule, FormsModule, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.DatePipe], styles: [".community-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 900px;\n  margin: 0 auto;\n\n\n  .community-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 2rem;\n\n    .header-left {\n      h1 {\n        font-size: 2.5rem;\n        font-weight: 700;\n        color: #1a1a1a;\n        margin-bottom: 0.5rem;\n      }\n      p {\n        color: #666;\n        font-size: 1.1rem;\n      }\n    }\n\n    .create-post-trigger {\n      display: flex;\n      align-items: center;\n      gap: 0.75rem;\n      background: #1d4ed8;\n      color: white;\n      border: none;\n      padding: 0.8rem 1.5rem;\n      border-radius: 1rem;\n      font-weight: 600;\n      font-size: 1rem;\n      cursor: pointer;\n      transition: all 0.2s;\n      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n\n      &:hover {\n        transform: translateY(-2px);\n        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);\n      }\n\n      .plus-icon {\n        font-size: 1.4rem;\n        font-weight: 400;\n      }\n    }\n  }\n}\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1.5rem;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n  margin-bottom: 0 !important;\n  animation: _ngcontent-%COMP%_slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  \n  .modal-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 1.5rem;\n    padding-bottom: 1rem;\n    border-bottom: 1px solid #f0f0f0;\n\n    h3 {\n      font-size: 1.25rem;\n      font-weight: 600;\n      color: #1a1a1a;\n    }\n\n    .close-btn {\n      background: none;\n      border: none;\n      font-size: 1.8rem;\n      color: #999;\n      cursor: pointer;\n      line-height: 1;\n      padding: 0.5rem;\n      \n      &:hover {\n        color: #333;\n      }\n    }\n  }\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n@keyframes _ngcontent-%COMP%_slideUp {\n  from { transform: translateY(20px); opacity: 0; }\n  to { transform: translateY(0); opacity: 1; }\n}\n\n.post-creator-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 1.5rem;\n  padding: 1.5rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);\n  border: 1px solid #eee;\n  margin-bottom: 2rem;\n\n  .creator-top {\n    display: flex;\n    gap: 1rem;\n    margin-bottom: 1.5rem;\n\n    .user-avatar {\n      width: 48px;\n      height: 48px;\n      background: #1a56ad;\n      color: white;\n      border-radius: 50%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-weight: 600;\n      flex-shrink: 0;\n    }\n\n    textarea {\n      width: 100%;\n      border: none;\n      background: black;\n      border-radius: 0.75rem;\n      padding: 1rem;\n      font-family: inherit;\n      font-size: 1rem;\n      min-height: 80px;\n      resize: none;\n      outline: none;\n      transition: background 0.2s;\n\n      &:focus {\n        background: black;\n      }\n    }\n  }\n\n  .creator-bottom {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    .tag-selector {\n      display: flex;\n      gap: 0.5rem;\n      flex-wrap: wrap;\n    }\n\n    .post-button {\n      background: #1e222d;\n      color: white;\n      border: none;\n      padding: 0.75rem 2rem;\n      border-radius: 0.75rem;\n      font-weight: 600;\n      cursor: pointer;\n      transition: opacity 0.2s;\n\n      &:disabled {\n        opacity: 0.5;\n        cursor: not-allowed;\n      }\n\n      &:hover:not(:disabled) {\n        opacity: 0.9;\n      }\n    }\n  }\n}\n\n.tag-pill[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border-radius: 2rem;\n  border: 1px solid #eee;\n  background: white;\n  font-size: 0.9rem;\n  color: #555;\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &:hover {\n    background: #f8f9fa;\n    border-color: #ddd;\n  }\n\n  &.active {\n    background: #1e222d;\n    color: white;\n    border-color: #1e222d;\n  }\n}\n\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-bottom: 2rem;\n  overflow-x: auto;\n  padding-bottom: 0.5rem;\n  scrollbar-width: none;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  .filter-pill {\n    white-space: nowrap;\n    padding: 0.6rem 1.25rem;\n    border-radius: 2rem;\n    border: 1px solid #eee;\n    background: white;\n    font-weight: 500;\n    color: #555;\n    cursor: pointer;\n    transition: all 0.2s;\n\n    &:hover {\n      background: #f8f9fa;\n    }\n\n    &.active {\n      background: #1d4ed8;\n      color: white;\n      border-color: #1e222d;\n      font-weight: 600;\n    }\n  }\n}\n\n.posts-feed[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  color:#111;\n\n  .post-card {\n    background: white;\n    border-radius: 1rem;\n    padding: 1.5rem;\n    border: 1px solid #eee;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);\n\n    .post-header {\n      display: flex;\n      gap: 1rem;\n      align-items: flex-start;\n      margin-bottom: 1.25rem;\n      position: relative;\n\n      .user-avatar.small {\n        width: 44px;\n        height: 44px;\n        font-size: 0.9rem;\n        background: #eef2ff;\n        color: #1d4ed8;\n        border-radius: 50%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-weight: 600;\n      }\n\n      .header-main {\n        flex: 1;\n\n        .name-row {\n          display: flex;\n          align-items: center;\n          gap: 0.75rem;\n          margin-bottom: 0.2rem;\n\n          strong {\n            font-size: 1.05rem;\n            color: #111;\n          }\n\n          // .status-badge {\n          //   background: #fef3c7;\n          //   color: #92400e;\n          //   font-size: 0.75rem;\n          //   padding: 0.2rem 0.6rem;\n          //   border-radius: 1rem;\n          //   font-weight: 600;\n          //   display: flex;\n          //   align-items: center;\n          //   gap: 0.25rem;\n\n            &.alumni {\n              background: #d1fae5;\n              color: #065f46;\n            }\n          }\n        }\n\n        .subtitle {\n          color: #666;\n          font-size: 0.85rem;\n        }\n      }\n\n      .post-tag-badge {\n        background: #eff6ff;\n        color: #1d4ed8;\n        font-size: 0.75rem;\n        padding: 0.25rem 0.75rem;\n        border-radius: 0.5rem;\n        font-weight: 600;\n      }\n    }\n\n    .post-body {\n      margin-bottom: 1.25rem;\n      p {\n        line-height: 1.6;\n        color: #333;\n        font-size: 1.05rem;\n        white-space: pre-wrap;\n      }\n    }\n\n    .post-footer {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding-top: 1rem;\n      border-top: 1px solid #f1f1f1;\n\n      .footer-left {\n        display: flex;\n        gap: 1.5rem;\n\n        .action-btn {\n          background: none;\n          border: none;\n          display: flex;\n          align-items: center;\n          gap: 0.5rem;\n          color: #666;\n          font-size: 0.9rem;\n          cursor: pointer;\n          padding: 0;\n          transition: color 0.2s;\n\n          &:hover {\n            color: #111;\n          }\n\n          .icon {\n            font-size: 1.1rem;\n          }\n        }\n      }\n\n      .footer-right {\n        color: #999;\n        font-size: 0.85rem;\n      }\n    }\n\n    .post-comments {\n      margin-top: 1.5rem;\n      background: #fafafa;\n      border-radius: 0.75rem;\n      padding: 1rem;\n      display: flex;\n      flex-direction: column;\n      gap: 0.75rem;\n\n      .comment-item {\n        font-size: 0.9rem;\n        padding-bottom: 0.5rem;\n        border-bottom: 1px solid #f0f0f0;\n\n        strong {\n          color: #1a1a1a;\n          margin-right: 0.5rem;\n        }\n        p {\n          display: inline;\n          color: #444;\n        }\n        small {\n          display: block;\n          color: #999;\n          font-size: 0.75rem;\n          margin-top: 0.2rem;\n        }\n      }\n\n      .comment-input-row {\n        display: flex;\n        gap: 0.5rem;\n        margin-top: 0.5rem;\n\n        input {\n          flex: 1;\n          border: 1px solid #eee;\n          border-radius: 0.5rem;\n          padding: 0.5rem 0.75rem;\n          font-size: 0.9rem;\n          outline: none;\n          &:focus {\n            border-color: #1a56ad;\n          }\n        }\n\n        button {\n          background: #1a56ad;\n          color: white;\n          border: none;\n          padding: 0.4rem 1rem;\n          border-radius: 0.5rem;\n          font-size: 0.85rem;\n          font-weight: 500;\n          cursor: pointer;\n          &:hover {\n            opacity: 0.9;\n          }\n        }\n      }\n    }\n  }\n\n\n.loading-state, .empty-state {\n  text-align: center;\n  padding: 3rem;\n  color: #888;\n  background: white;\n  border-radius: 1rem;\n  border: 1px dashed #ddd;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardCommunityComponent, [{
        type: Component,
        args: [{ selector: 'app-dashboard-community', standalone: true, imports: [CommonModule, FormsModule], template: "<section class=\"community-page\">\n  <div class=\"community-header\">\n    <div class=\"header-left\">\n      <h1>Community</h1>\n      <p>Real advice from Nepali students abroad</p>\n    </div>\n    <button class=\"create-post-trigger\" (click)=\"showCreator.set(true)\">\n      <span class=\"plus-icon\">+</span>\n      Create Post\n    </button>\n  </div>\n\n  @if (showCreator()) {\n    <div class=\"modal-overlay\" (click)=\"showCreator.set(false)\">\n      <div class=\"post-creator-card modal-content\" (click)=\"$event.stopPropagation()\">\n        <div class=\"modal-header\">\n          <h3>Create a post</h3>\n          <button class=\"close-btn\" (click)=\"showCreator.set(false)\">\u00D7</button>\n        </div>\n        \n        <div class=\"creator-top\">\n          <div class=\"user-avatar\">\n            {{ getInitials(currentUser?.name || '') }}\n          </div>\n          <textarea \n            placeholder=\"Share your experience or ask a question...\"\n            [ngModel]=\"postContent()\"\n            (ngModelChange)=\"postContent.set($event)\"\n            autofocus\n          ></textarea>\n        </div>\n        \n        <div class=\"creator-bottom\">\n          <div class=\"tag-selector\">\n            @for (tag of postTags; track tag) {\n              <button \n                type=\"button\" \n                class=\"tag-pill\" \n                [class.active]=\"selectedPostTags().includes(tag)\"\n                (click)=\"togglePostTag(tag)\"\n              >\n                {{ tag }}\n              </button>\n            }\n          </div>\n          <button \n            type=\"button\" \n            class=\"post-button\" \n            [disabled]=\"!postContent().trim() || isPosting()\"\n            (click)=\"createPost()\"\n          >\n            {{ isPosting() ? 'Posting...' : 'Post' }}\n          </button>\n        </div>\n      </div>\n    </div>\n  }\n\n\n  <div class=\"filter-bar\">\n    @for (tag of filterTags; track tag) {\n      <button\n        type=\"button\"\n        class=\"filter-pill\"\n        [class.active]=\"activeFilter() === tag\"\n        (click)=\"loadPosts(tag)\"\n      >\n        {{ tag }}\n      </button>\n    }\n  </div>\n\n  @if (isLoading()) {\n    <div class=\"loading-state\">Loading posts...</div>\n  } @else if (!communityService.posts().length) {\n    <div class=\"empty-state\">No posts yet.</div>\n  } @else {\n    <div class=\"posts-feed\">\n      @for (post of communityService.posts(); track post._id) {\n        <article class=\"post-card\">\n          <div class=\"post-header\">\n            <div class=\"user-avatar small\">\n              {{ getInitials(post.author.name) }}\n            </div>\n\n            <div class=\"header-main\">\n              <div class=\"name-row\">\n                <strong>{{ post.author.name }}</strong>\n              </div>\n\n              <div class=\"subtitle\">\n                {{ post.authorMetadata?.university || 'Community member' }}\n                @if (post.authorMetadata?.location) {\n                  <span>\u2022 {{ post.authorMetadata?.location }}</span>\n                }\n              </div>\n            </div>\n\n            @if (post.tags.length) {\n              <span class=\"post-tag-badge\">{{ post.tags[0] }}</span>\n            }\n          </div>\n\n          <div class=\"post-body\">\n            <p>{{ post.content }}</p>\n          </div>\n\n          <div class=\"post-footer\">\n            <div class=\"footer-left\">\n              <button type=\"button\" class=\"action-btn\" (click)=\"likePost(post._id)\">\n                <span class=\"icon\">\u2661</span>\n                <span>{{ post.likes.length }}</span>\n              </button>\n              <span class=\"action-btn\">\n                <span class=\"icon\">\uD83D\uDCAC</span>\n                <span>{{ post.comments.length }}</span>\n              </span>\n            </div>\n            <div class=\"footer-right\">{{ post.createdAt | date:'mediumDate' }}</div>\n          </div>\n\n          <div class=\"post-comments\">\n            @for (comment of post.comments; track comment._id) {\n              <div class=\"comment-item\">\n                <strong>{{ comment.author.name }}</strong>\n                <p>{{ comment.content }}</p>\n                <small>{{ comment.createdAt | date:'short' }}</small>\n              </div>\n            }\n\n            <div class=\"comment-input-row\">\n              <input\n                type=\"text\"\n                placeholder=\"Write a comment...\"\n                [ngModel]=\"commentInputs()[post._id] || ''\"\n                (ngModelChange)=\"updateCommentInput(post._id, $event)\"\n                (keyup.enter)=\"addComment(post._id)\"\n              />\n              <button type=\"button\" (click)=\"addComment(post._id)\">Reply</button>\n            </div>\n          </div>\n        </article>\n      }\n    </div>\n  }\n</section>\n", styles: [".community-page {\n  padding: 2rem;\n  max-width: 900px;\n  margin: 0 auto;\n\n\n  .community-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 2rem;\n\n    .header-left {\n      h1 {\n        font-size: 2.5rem;\n        font-weight: 700;\n        color: #1a1a1a;\n        margin-bottom: 0.5rem;\n      }\n      p {\n        color: #666;\n        font-size: 1.1rem;\n      }\n    }\n\n    .create-post-trigger {\n      display: flex;\n      align-items: center;\n      gap: 0.75rem;\n      background: #1d4ed8;\n      color: white;\n      border: none;\n      padding: 0.8rem 1.5rem;\n      border-radius: 1rem;\n      font-weight: 600;\n      font-size: 1rem;\n      cursor: pointer;\n      transition: all 0.2s;\n      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n\n      &:hover {\n        transform: translateY(-2px);\n        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);\n      }\n\n      .plus-icon {\n        font-size: 1.4rem;\n        font-weight: 400;\n      }\n    }\n  }\n}\n\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1.5rem;\n  animation: fadeIn 0.2s ease;\n}\n\n.modal-content {\n  width: 100%;\n  max-width: 600px;\n  margin-bottom: 0 !important;\n  animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  \n  .modal-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 1.5rem;\n    padding-bottom: 1rem;\n    border-bottom: 1px solid #f0f0f0;\n\n    h3 {\n      font-size: 1.25rem;\n      font-weight: 600;\n      color: #1a1a1a;\n    }\n\n    .close-btn {\n      background: none;\n      border: none;\n      font-size: 1.8rem;\n      color: #999;\n      cursor: pointer;\n      line-height: 1;\n      padding: 0.5rem;\n      \n      &:hover {\n        color: #333;\n      }\n    }\n  }\n}\n\n@keyframes fadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n@keyframes slideUp {\n  from { transform: translateY(20px); opacity: 0; }\n  to { transform: translateY(0); opacity: 1; }\n}\n\n.post-creator-card {\n  background: white;\n  border-radius: 1.5rem;\n  padding: 1.5rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);\n  border: 1px solid #eee;\n  margin-bottom: 2rem;\n\n  .creator-top {\n    display: flex;\n    gap: 1rem;\n    margin-bottom: 1.5rem;\n\n    .user-avatar {\n      width: 48px;\n      height: 48px;\n      background: #1a56ad;\n      color: white;\n      border-radius: 50%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-weight: 600;\n      flex-shrink: 0;\n    }\n\n    textarea {\n      width: 100%;\n      border: none;\n      background: black;\n      border-radius: 0.75rem;\n      padding: 1rem;\n      font-family: inherit;\n      font-size: 1rem;\n      min-height: 80px;\n      resize: none;\n      outline: none;\n      transition: background 0.2s;\n\n      &:focus {\n        background: black;\n      }\n    }\n  }\n\n  .creator-bottom {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    .tag-selector {\n      display: flex;\n      gap: 0.5rem;\n      flex-wrap: wrap;\n    }\n\n    .post-button {\n      background: #1e222d;\n      color: white;\n      border: none;\n      padding: 0.75rem 2rem;\n      border-radius: 0.75rem;\n      font-weight: 600;\n      cursor: pointer;\n      transition: opacity 0.2s;\n\n      &:disabled {\n        opacity: 0.5;\n        cursor: not-allowed;\n      }\n\n      &:hover:not(:disabled) {\n        opacity: 0.9;\n      }\n    }\n  }\n}\n\n.tag-pill {\n  padding: 0.5rem 1rem;\n  border-radius: 2rem;\n  border: 1px solid #eee;\n  background: white;\n  font-size: 0.9rem;\n  color: #555;\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &:hover {\n    background: #f8f9fa;\n    border-color: #ddd;\n  }\n\n  &.active {\n    background: #1e222d;\n    color: white;\n    border-color: #1e222d;\n  }\n}\n\n.filter-bar {\n  display: flex;\n  gap: 0.75rem;\n  margin-bottom: 2rem;\n  overflow-x: auto;\n  padding-bottom: 0.5rem;\n  scrollbar-width: none;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  .filter-pill {\n    white-space: nowrap;\n    padding: 0.6rem 1.25rem;\n    border-radius: 2rem;\n    border: 1px solid #eee;\n    background: white;\n    font-weight: 500;\n    color: #555;\n    cursor: pointer;\n    transition: all 0.2s;\n\n    &:hover {\n      background: #f8f9fa;\n    }\n\n    &.active {\n      background: #1d4ed8;\n      color: white;\n      border-color: #1e222d;\n      font-weight: 600;\n    }\n  }\n}\n\n.posts-feed {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  color:#111;\n\n  .post-card {\n    background: white;\n    border-radius: 1rem;\n    padding: 1.5rem;\n    border: 1px solid #eee;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);\n\n    .post-header {\n      display: flex;\n      gap: 1rem;\n      align-items: flex-start;\n      margin-bottom: 1.25rem;\n      position: relative;\n\n      .user-avatar.small {\n        width: 44px;\n        height: 44px;\n        font-size: 0.9rem;\n        background: #eef2ff;\n        color: #1d4ed8;\n        border-radius: 50%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-weight: 600;\n      }\n\n      .header-main {\n        flex: 1;\n\n        .name-row {\n          display: flex;\n          align-items: center;\n          gap: 0.75rem;\n          margin-bottom: 0.2rem;\n\n          strong {\n            font-size: 1.05rem;\n            color: #111;\n          }\n\n          // .status-badge {\n          //   background: #fef3c7;\n          //   color: #92400e;\n          //   font-size: 0.75rem;\n          //   padding: 0.2rem 0.6rem;\n          //   border-radius: 1rem;\n          //   font-weight: 600;\n          //   display: flex;\n          //   align-items: center;\n          //   gap: 0.25rem;\n\n            &.alumni {\n              background: #d1fae5;\n              color: #065f46;\n            }\n          }\n        }\n\n        .subtitle {\n          color: #666;\n          font-size: 0.85rem;\n        }\n      }\n\n      .post-tag-badge {\n        background: #eff6ff;\n        color: #1d4ed8;\n        font-size: 0.75rem;\n        padding: 0.25rem 0.75rem;\n        border-radius: 0.5rem;\n        font-weight: 600;\n      }\n    }\n\n    .post-body {\n      margin-bottom: 1.25rem;\n      p {\n        line-height: 1.6;\n        color: #333;\n        font-size: 1.05rem;\n        white-space: pre-wrap;\n      }\n    }\n\n    .post-footer {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding-top: 1rem;\n      border-top: 1px solid #f1f1f1;\n\n      .footer-left {\n        display: flex;\n        gap: 1.5rem;\n\n        .action-btn {\n          background: none;\n          border: none;\n          display: flex;\n          align-items: center;\n          gap: 0.5rem;\n          color: #666;\n          font-size: 0.9rem;\n          cursor: pointer;\n          padding: 0;\n          transition: color 0.2s;\n\n          &:hover {\n            color: #111;\n          }\n\n          .icon {\n            font-size: 1.1rem;\n          }\n        }\n      }\n\n      .footer-right {\n        color: #999;\n        font-size: 0.85rem;\n      }\n    }\n\n    .post-comments {\n      margin-top: 1.5rem;\n      background: #fafafa;\n      border-radius: 0.75rem;\n      padding: 1rem;\n      display: flex;\n      flex-direction: column;\n      gap: 0.75rem;\n\n      .comment-item {\n        font-size: 0.9rem;\n        padding-bottom: 0.5rem;\n        border-bottom: 1px solid #f0f0f0;\n\n        strong {\n          color: #1a1a1a;\n          margin-right: 0.5rem;\n        }\n        p {\n          display: inline;\n          color: #444;\n        }\n        small {\n          display: block;\n          color: #999;\n          font-size: 0.75rem;\n          margin-top: 0.2rem;\n        }\n      }\n\n      .comment-input-row {\n        display: flex;\n        gap: 0.5rem;\n        margin-top: 0.5rem;\n\n        input {\n          flex: 1;\n          border: 1px solid #eee;\n          border-radius: 0.5rem;\n          padding: 0.5rem 0.75rem;\n          font-size: 0.9rem;\n          outline: none;\n          &:focus {\n            border-color: #1a56ad;\n          }\n        }\n\n        button {\n          background: #1a56ad;\n          color: white;\n          border: none;\n          padding: 0.4rem 1rem;\n          border-radius: 0.5rem;\n          font-size: 0.85rem;\n          font-weight: 500;\n          cursor: pointer;\n          &:hover {\n            opacity: 0.9;\n          }\n        }\n      }\n    }\n  }\n\n\n.loading-state, .empty-state {\n  text-align: center;\n  padding: 3rem;\n  color: #888;\n  background: white;\n  border-radius: 1rem;\n  border: 1px dashed #ddd;\n}\n"] }]
    }], () => [{ type: i1.CommunityService }, { type: i2.AuthService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardCommunityComponent, { className: "DashboardCommunityComponent", filePath: "src/app/pages/dashboard/community/community.ts", lineNumber: 14 }); })();
