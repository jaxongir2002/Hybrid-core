import type { Schema, Attribute } from '@strapi/strapi';

export interface StudioVideos extends Schema.Component {
  collectionName: 'components_studio_videos';
  info: {
    displayName: 'videos';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    video: Attribute.String;
  };
}

export interface StudioSliderVideo extends Schema.Component {
  collectionName: 'components_studio_slider_videos';
  info: {
    displayName: 'slider_video';
  };
  attributes: {
    title: Attribute.String;
    video: Attribute.String;
  };
}

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
    description: '';
  };
  attributes: {
    video: Attribute.String;
    alt: Attribute.String;
    tags_name: Attribute.Component<'landing.tags', true>;
  };
}

export interface LandingTags extends Schema.Component {
  collectionName: 'components_landing_tags';
  info: {
    displayName: 'tags';
  };
  attributes: {
    tags_text: Attribute.String;
  };
}

export interface OurworkOurwork extends Schema.Component {
  collectionName: 'components_ourwork_ourworks';
  info: {
    displayName: 'ourwork';
  };
  attributes: {
    video: Attribute.String;
    alt: Attribute.String;
    name: Attribute.String;
  };
}

export interface LabLabVideoList extends Schema.Component {
  collectionName: 'components_lab_lab_video_lists';
  info: {
    displayName: 'lab_video_list';
  };
  attributes: {
    title: Attribute.String;
    video: Attribute.String;
  };
}

export interface LabLabMain extends Schema.Component {
  collectionName: 'components_lab_lab_mains';
  info: {
    displayName: 'lab_main';
  };
  attributes: {
    video: Attribute.String;
  };
}

export interface InstallationInstallationVideo extends Schema.Component {
  collectionName: 'components_installation_installation_videos';
  info: {
    displayName: 'installation_video';
  };
  attributes: {
    title: Attribute.String;
    video: Attribute.String;
  };
}

export interface CommunityVideos extends Schema.Component {
  collectionName: 'components_community_videos';
  info: {
    displayName: 'videos';
  };
  attributes: {
    video: Attribute.String;
    alt: Attribute.String;
  };
}

export interface BlogListMainList extends Schema.Component {
  collectionName: 'components_blog_list_main_lists';
  info: {
    displayName: 'main_list';
  };
  attributes: {
    video: Attribute.String;
    description: Attribute.String;
    title: Attribute.String;
    date: Attribute.Date;
  };
}

export interface BlogTextVideo extends Schema.Component {
  collectionName: 'components_blog_text_videos';
  info: {
    displayName: 'text_video';
  };
  attributes: {
    title_text: Attribute.String;
  };
}

export interface BlogFilterBlog extends Schema.Component {
  collectionName: 'components_blog_filter_blogs';
  info: {
    displayName: 'filter_blog';
  };
  attributes: {
    title_text: Attribute.String;
  };
}

export interface BlogDescriptionTitle extends Schema.Component {
  collectionName: 'components_blog_description_titles';
  info: {
    displayName: 'description_title';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.RichText;
  };
}

export interface BlogCards extends Schema.Component {
  collectionName: 'components_blog_cards';
  info: {
    displayName: 'cards';
    description: '';
  };
  attributes: {
    video: Attribute.String;
    description: Attribute.String;
    title: Attribute.String;
    date: Attribute.Date;
  };
}

export interface AboutVideosVideos extends Schema.Component {
  collectionName: 'components_about_videos_videos';
  info: {
    displayName: 'videos';
    description: '';
  };
  attributes: {
    video: Attribute.String;
    alt: Attribute.String;
    title: Attribute.String;
  };
}

export interface AboutVideosTeamVideo extends Schema.Component {
  collectionName: 'components_about_videos_team_videos';
  info: {
    displayName: 'teamVideo';
  };
  attributes: {
    video: Attribute.String;
    alt: Attribute.String;
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'studio.videos': StudioVideos;
      'studio.slider-video': StudioSliderVideo;
      'seo.seo': SeoSeo;
      'landing.tags': LandingTags;
      'ourwork.ourwork': OurworkOurwork;
      'lab.lab-video-list': LabLabVideoList;
      'lab.lab-main': LabLabMain;
      'installation.installation-video': InstallationInstallationVideo;
      'community.videos': CommunityVideos;
      'blog-list.main-list': BlogListMainList;
      'blog.text-video': BlogTextVideo;
      'blog.filter-blog': BlogFilterBlog;
      'blog.description-title': BlogDescriptionTitle;
      'blog.cards': BlogCards;
      'about-videos.videos': AboutVideosVideos;
      'about-videos.team-video': AboutVideosTeamVideo;
    }
  }
}
