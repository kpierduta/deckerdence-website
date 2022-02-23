import S from '@sanity/desk-tool/structure-builder';
import {
  IoCompassOutline as PagesIcon,
  IoCodeSlashOutline as CodeIcon,
  IoOptions as EditIcon,
  IoGlobeOutline as WebIcon,
} from 'react-icons/io5';
import { ImLoop as RedirectIcon } from 'react-icons/im';
import { RiTeamLine } from 'react-icons/ri';
import { AiOutlineSetting } from 'react-icons/ai';
import { MdOutlineArticle } from 'react-icons/md';
import { VscEdit } from 'react-icons/vsc';
import { FcGallery } from 'react-icons/fc';
import { FaHireAHelper } from 'react-icons/fa';
import { BiArrowToBottom } from 'react-icons/bi';
import { CgFormatUppercase } from 'react-icons/cg';

import JsonPreview from './JsonPreview';
import WebPreview from './WebPreview';

export const getDefaultDocumentNode = () =>
  S.document().views([
    S.view.form().icon(EditIcon),
    S.view.component(JsonPreview).title('JSON').icon(CodeIcon),
    S.view.component(WebPreview).title('Live Preview').icon(WebIcon),
  ]);

export default () =>
  S.list()
    .title('Content')
    .items([
      // Pages
      S.listItem()
        .title('Pages')
        .icon(PagesIcon)
        .child(S.documentTypeList('pages')),

      S.divider(),
      S.listItem()
        .title('Team')
        .icon(RiTeamLine)
        .child(S.documentTypeList('team')),
      S.divider(),

      S.listItem()
        .title('Main Pages')
        .icon(FcGallery)
        .child(S.documentTypeList('mainPage')),
      S.divider(),

      // Redirects

      S.listItem()
        .title('Testimonial')
        .icon(VscEdit)
        .child(S.documentTypeList('testimonial')),
      S.divider(),

      S.listItem()
        .title('Create Redirect')
        .icon(RedirectIcon)
        .child(S.documentTypeList('createRedirect')),
      S.divider(),
      // Blog page

      S.listItem()
        .title('Blog')
        .icon(MdOutlineArticle)
        .child(S.documentTypeList('blogPage')),
      S.divider(),

      S.listItem()
        .title('Gallery')
        .icon(FcGallery)
        .child(S.documentTypeList('galleryPage')),
      S.divider(),

      S.listItem()
        .title('Hire options')
        .icon(FaHireAHelper)
        .child(S.documentTypeList('vehicleHirePage')),
      S.divider(),

      // Global settings

      S.listItem()
        .title('Footer')
        .icon(BiArrowToBottom)
        .child(S.documentTypeList('footer')),
      S.divider(),

      S.listItem()
        .title('Navigation (nav)')
        .icon(CgFormatUppercase)
        .child(S.documentTypeList('navigation')),
      S.divider(),

      S.listItem()
        .title('Site Settings')
        .icon(AiOutlineSetting)
        .child(S.documentTypeList('siteSettings')),
    ]);
