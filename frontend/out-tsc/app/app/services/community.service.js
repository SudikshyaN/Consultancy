import { Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from '../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class CommunityService {
    http;
    baseUrl = `${environment.apiBaseUrl}/api/community`;
    posts = signal([], ...(ngDevMode ? [{ debugName: "posts" }] : /* istanbul ignore next */ []));
    constructor(http) {
        this.http = http;
    }
    getPosts(tag) {
        const url = tag && tag !== 'All posts' ? `${this.baseUrl}?tag=${encodeURIComponent(tag)}` : this.baseUrl;
        return this.http.get(url).pipe(tap(res => this.posts.set(res.posts)));
    }
    createPost(content, tags) {
        return this.http.post(this.baseUrl, { content, tags });
    }
    likePost(postId) {
        return this.http.post(`${this.baseUrl}/${postId}/like`, {}).pipe(tap(res => {
            const currentPosts = this.posts();
            const index = currentPosts.findIndex(p => p._id === postId);
            if (index !== -1) {
                currentPosts[index].likes = res.likes;
                this.posts.set([...currentPosts]);
            }
        }));
    }
    addComment(postId, content) {
        return this.http.post(`${this.baseUrl}/${postId}/comment`, { content }).pipe(tap(res => {
            const currentPosts = this.posts();
            const index = currentPosts.findIndex(p => p._id === postId);
            if (index !== -1) {
                currentPosts[index].comments = res.comments;
                this.posts.set([...currentPosts]);
            }
        }));
    }
    static ɵfac = function CommunityService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CommunityService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CommunityService, factory: CommunityService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CommunityService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
