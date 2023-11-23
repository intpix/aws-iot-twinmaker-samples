// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. 2023
// SPDX-License-Identifier: Apache-2.0

import { createClassName, type ClassName } from '@iot-prototype-kit/core/utils/element';

import baseStyles from './styles.module.css';

export function CookieFactoryLogo({ className }: { className?: ClassName }) {
  return (
    <svg className={createClassName(baseStyles.svg, className)} viewBox="0 0 393 290">
      <g fillRule="evenodd">
        <path
          fillRule="nonzero"
          d="M43.046 141.477c-5.923 0-11.491-1.168-16.705-3.504a43.993 43.993 0 0 1-13.765-9.823c-3.92-4.17-7.008-8.988-9.26-14.453C1.106 108.191 0 102.31 0 96.053c0-6.298 1.105-12.18 3.316-17.643 2.252-5.506 5.34-10.324 9.26-14.453 3.963-4.171 8.55-7.425 13.765-9.76 5.214-2.378 10.782-3.567 16.705-3.567 7.091 0 13.619 1.648 19.584 4.943 5.964 3.253 10.907 7.612 14.828 13.076l-13.64 7.32c-2.46-3.044-5.527-5.484-9.197-7.32-3.629-1.835-7.487-2.753-11.575-2.753-3.837 0-7.445.793-10.824 2.378-3.379 1.543-6.34 3.712-8.884 6.507-2.545 2.753-4.526 5.965-5.944 9.635-1.419 3.629-2.128 7.508-2.128 11.637 0 4.172.71 8.072 2.128 11.7 1.46 3.63 3.462 6.841 6.006 9.636a28.66 28.66 0 0 0 8.822 6.507c3.379 1.543 6.987 2.315 10.824 2.315 4.171 0 8.05-.918 11.638-2.753 3.628-1.877 6.673-4.338 9.134-7.383l13.64 7.383c-3.92 5.423-8.864 9.781-14.828 13.076-5.965 3.296-12.493 4.943-19.584 4.943Zm66.945 0c-5.756 0-11.012-1.48-15.767-4.442-4.713-2.961-8.488-6.924-11.324-11.888-2.795-5.005-4.192-10.532-4.192-16.58 0-4.588.813-8.864 2.44-12.826 1.626-4.005 3.858-7.508 6.694-10.512a31.402 31.402 0 0 1 10.011-7.132c3.796-1.71 7.841-2.566 12.138-2.566 5.756 0 10.99 1.482 15.704 4.443 4.755 2.961 8.53 6.945 11.325 11.95 2.836 5.005 4.255 10.553 4.255 16.643 0 4.547-.814 8.801-2.44 12.764-1.627 3.962-3.88 7.466-6.758 10.51a31.144 31.144 0 0 1-9.948 7.07c-3.754 1.711-7.8 2.566-12.138 2.566Zm0-15.266c3.045 0 5.777-.814 8.196-2.44 2.42-1.627 4.317-3.775 5.694-6.445 1.418-2.67 2.127-5.589 2.127-8.76 0-3.253-.73-6.214-2.19-8.884-1.418-2.71-3.358-4.859-5.818-6.444-2.42-1.627-5.09-2.44-8.009-2.44-3.003 0-5.715.813-8.134 2.44-2.42 1.627-4.338 3.796-5.756 6.507-1.418 2.711-2.127 5.652-2.127 8.822 0 3.295.73 6.278 2.19 8.947 1.46 2.67 3.399 4.797 5.818 6.382 2.461 1.543 5.131 2.315 8.01 2.315Zm66.893 15.266c-5.756 0-11.012-1.48-15.767-4.442-4.713-2.961-8.488-6.924-11.325-11.888-2.794-5.005-4.192-10.532-4.192-16.58 0-4.588.814-8.864 2.44-12.826 1.627-4.005 3.859-7.508 6.695-10.512a31.407 31.407 0 0 1 10.01-7.132c3.797-1.71 7.843-2.566 12.139-2.566 5.756 0 10.991 1.482 15.704 4.443 4.755 2.961 8.53 6.945 11.325 11.95 2.836 5.005 4.254 10.553 4.254 16.643 0 4.547-.813 8.801-2.44 12.764-1.627 3.962-3.879 7.466-6.757 10.51a31.134 31.134 0 0 1-9.948 7.07c-3.754 1.711-7.8 2.566-12.138 2.566Zm0-15.266c3.045 0 5.777-.814 8.196-2.44 2.42-1.627 4.317-3.775 5.694-6.445 1.418-2.67 2.127-5.589 2.127-8.76 0-3.253-.73-6.214-2.19-8.884-1.418-2.71-3.358-4.859-5.819-6.444-2.419-1.627-5.088-2.44-8.008-2.44-3.004 0-5.714.813-8.134 2.44s-4.338 3.796-5.756 6.507c-1.418 2.711-2.127 5.652-2.127 8.822 0 3.295.73 6.278 2.19 8.947 1.46 2.67 3.399 4.797 5.818 6.382 2.461 1.543 5.13 2.315 8.009 2.315Zm93.359 13.64H252.66l-14.265-24.59-8.76 10.45v14.14H214.37V46h15.267v55.997l20.71-24.714h19.958l-21.46 25.59 21.398 36.977Zm7.34-62.568h15.266v62.567h-15.266V77.283Zm52.83 64.194c-5.757 0-11.012-1.48-15.767-4.442-4.713-2.961-8.489-6.945-11.325-11.95-2.795-5.006-4.192-10.532-4.192-16.58 0-4.547.813-8.802 2.44-12.764 1.627-4.005 3.859-7.508 6.695-10.512a31.407 31.407 0 0 1 10.01-7.132c3.797-1.71 7.842-2.566 12.138-2.566 4.88 0 9.344 1.044 13.39 3.129a30.442 30.442 0 0 1 10.386 8.446c2.836 3.588 4.901 7.676 6.194 12.264 1.293 4.588 1.585 9.385.876 14.39h-45.736c.584 2.336 1.543 4.442 2.878 6.32 1.335 1.835 3.024 3.315 5.068 4.441 2.044 1.085 4.359 1.648 6.944 1.69 2.67.042 5.09-.584 7.258-1.877 2.211-1.335 4.047-3.129 5.506-5.381l15.58 3.629c-2.545 5.548-6.34 10.094-11.388 13.64-5.047 3.503-10.699 5.255-16.956 5.255ZM315.02 102.31h30.783a15.874 15.874 0 0 0-2.94-6.757 16.48 16.48 0 0 0-5.444-4.88 14.159 14.159 0 0 0-7.008-1.815c-2.502 0-4.817.605-6.944 1.815-2.128 1.168-3.942 2.774-5.444 4.817-1.46 2.002-2.46 4.276-3.003 6.82ZM4 243.594V156h51.743v15.266H19.266v17.77h30.47v15.266h-30.47v39.292H4Zm100.783-62.567h15.266v62.567h-15.266l-.688-7.758c-1.71 2.794-3.984 5.067-6.82 6.82-2.795 1.71-6.111 2.565-9.948 2.565-4.63 0-8.968-.876-13.014-2.628a34.205 34.205 0 0 1-10.7-7.258c-3.044-3.086-5.442-6.653-7.194-10.699-1.71-4.046-2.566-8.384-2.566-13.014 0-4.463.814-8.655 2.44-12.576 1.669-3.92 3.984-7.362 6.945-10.323a32.586 32.586 0 0 1 10.261-6.945c3.88-1.669 8.05-2.503 12.514-2.503 4.13 0 7.82.918 11.074 2.753 3.295 1.835 6.09 4.171 8.384 7.007l-.688-8.008Zm-17.832 49.49c3.254 0 6.132-.813 8.635-2.44 2.502-1.627 4.462-3.816 5.88-6.57 1.419-2.794 2.128-5.86 2.128-9.197 0-3.378-.709-6.444-2.127-9.197-1.419-2.795-3.4-5.005-5.944-6.632-2.503-1.627-5.36-2.44-8.572-2.44-3.212 0-6.152.834-8.822 2.502-2.627 1.627-4.734 3.817-6.319 6.57-1.543 2.753-2.315 5.819-2.315 9.197 0 3.379.793 6.445 2.378 9.198 1.584 2.753 3.691 4.942 6.319 6.57 2.67 1.626 5.589 2.44 8.76 2.44Zm81.229-5.756 13.765 7.446c-2.878 3.92-6.487 7.07-10.824 9.447-4.339 2.378-9.073 3.567-14.203 3.567-5.756 0-11.012-1.481-15.767-4.443-4.714-2.96-8.489-6.924-11.325-11.887-2.795-5.006-4.192-10.532-4.192-16.58 0-4.589.814-8.864 2.44-12.827 1.627-4.004 3.859-7.508 6.695-10.511a31.402 31.402 0 0 1 10.01-7.133c3.796-1.71 7.842-2.565 12.139-2.565 5.13 0 9.864 1.189 14.203 3.566a32.256 32.256 0 0 1 10.824 9.573l-13.765 7.383a15.305 15.305 0 0 0-5.193-3.88c-1.96-.917-3.984-1.376-6.07-1.376-3.002 0-5.714.835-8.133 2.503-2.42 1.627-4.338 3.796-5.756 6.507-1.419 2.67-2.127 5.59-2.127 8.76 0 3.128.708 6.048 2.127 8.759 1.418 2.67 3.337 4.817 5.756 6.444 2.42 1.627 5.13 2.44 8.134 2.44 2.169 0 4.233-.458 6.194-1.376 1.96-.96 3.65-2.232 5.068-3.817Zm54.153-28.468h-12.138v47.3H194.93v-47.3h-9.26v-15.266h9.26V161.38h15.266v19.646h12.138v15.266Zm31.334 48.928c-5.756 0-11.012-1.481-15.767-4.443-4.713-2.96-8.488-6.924-11.324-11.887-2.795-5.006-4.192-10.532-4.192-16.58 0-4.589.813-8.864 2.44-12.827 1.626-4.004 3.858-7.508 6.694-10.511a31.402 31.402 0 0 1 10.011-7.133c3.796-1.71 7.841-2.565 12.138-2.565 5.756 0 10.99 1.481 15.704 4.442 4.755 2.962 8.53 6.945 11.325 11.95 2.836 5.006 4.255 10.554 4.255 16.643 0 4.547-.814 8.802-2.44 12.764-1.627 3.963-3.88 7.466-6.758 10.511a31.144 31.144 0 0 1-9.948 7.07c-3.754 1.71-7.8 2.566-12.138 2.566Zm0-15.267c3.045 0 5.777-.813 8.196-2.44 2.42-1.627 4.317-3.774 5.694-6.444 1.418-2.67 2.127-5.59 2.127-8.76 0-3.253-.73-6.214-2.19-8.884-1.418-2.711-3.358-4.86-5.818-6.445-2.42-1.626-5.09-2.44-8.009-2.44-3.003 0-5.715.814-8.134 2.44-2.42 1.627-4.338 3.796-5.756 6.507-1.418 2.712-2.127 5.652-2.127 8.822 0 3.296.73 6.278 2.19 8.947 1.46 2.67 3.399 4.798 5.818 6.382 2.461 1.544 5.131 2.315 8.01 2.315Zm36.923 13.64-.062-62.567h15.266l.062 5.568c2.128-2.252 4.672-4.025 7.634-5.318 2.961-1.334 6.152-2.002 9.572-2.002 2.295 0 4.589.334 6.883 1.001l-6.007 15.392c-1.584-.626-3.17-.939-4.755-.939-2.46 0-4.713.605-6.757 1.814-2.002 1.169-3.608 2.774-4.818 4.818-1.167 2.002-1.752 4.234-1.752 6.695v35.538H290.59Zm86-62.567h16.206l-34.225 93.85h-16.204l11.324-31.283-22.524-62.567h16.705l13.452 41.67 15.267-41.67ZM13.17 289.957c-1.346 0-2.645-.209-3.896-.626-1.252-.43-2.348-1.037-3.29-1.824-.93-.786-1.59-1.722-1.984-2.806l2.807-1.055c.238.668.679 1.252 1.322 1.752.656.489 1.424.87 2.307 1.144a9.16 9.16 0 0 0 2.735.411c1.072 0 2.067-.172 2.985-.518.93-.358 1.68-.852 2.252-1.484.572-.632.858-1.37.858-2.217 0-.87-.297-1.579-.893-2.127-.596-.56-1.359-1-2.289-1.323a17.74 17.74 0 0 0-2.913-.768c-1.728-.286-3.278-.691-4.648-1.216-1.359-.536-2.438-1.281-3.236-2.234-.786-.954-1.18-2.211-1.18-3.772 0-1.454.417-2.724 1.252-3.808.846-1.084 1.96-1.925 3.342-2.52 1.383-.597 2.873-.894 4.47-.894 1.322 0 2.603.208 3.843.625a9.959 9.959 0 0 1 3.307 1.788 6.662 6.662 0 0 1 2.056 2.878l-2.842 1.037c-.239-.68-.686-1.263-1.341-1.752-.644-.5-1.406-.882-2.288-1.144a9.043 9.043 0 0 0-2.735-.411 7.858 7.858 0 0 0-2.968.518c-.918.358-1.662.852-2.234 1.484-.572.632-.859 1.364-.859 2.199 0 1 .263 1.77.787 2.306.536.524 1.263.917 2.181 1.18a31.06 31.06 0 0 0 3.093.697c1.62.274 3.122.709 4.504 1.305 1.383.583 2.491 1.364 3.325 2.341.847.978 1.27 2.181 1.27 3.611 0 1.455-.423 2.724-1.27 3.808-.834 1.085-1.942 1.925-3.325 2.52-1.382.597-2.884.895-4.504.895Zm12.905-18.342h3.003v17.877h-3.003v-17.877Zm1.537-2.914c-.477 0-.876-.154-1.198-.464a1.547 1.547 0 0 1-.482-1.162c0-.465.16-.852.482-1.162.322-.31.715-.465 1.18-.465.465 0 .858.155 1.18.465.322.31.483.697.483 1.162 0 .465-.161.852-.483 1.162-.31.31-.697.464-1.162.464Zm21.458 9.672v11.119h-3.004v-10.458a4.72 4.72 0 0 0-.661-2.467 4.887 4.887 0 0 0-1.77-1.752 4.722 4.722 0 0 0-2.467-.661c-.894 0-1.716.22-2.467.661a4.893 4.893 0 0 0-1.77 1.752 4.724 4.724 0 0 0-.66 2.467v10.458h-3.004v-17.877h3.003v2.235a6.826 6.826 0 0 1 2.396-1.984c.965-.5 2.014-.751 3.146-.751 1.335 0 2.55.328 3.647.983a7.168 7.168 0 0 1 2.627 2.61c.656 1.097.984 2.318.984 3.665Zm15.542 6.4 2.682 1.447a9.067 9.067 0 0 1-3.093 2.718 8.27 8.27 0 0 1-4.04 1.019c-1.644 0-3.146-.423-4.505-1.27a9.516 9.516 0 0 1-3.235-3.396c-.799-1.43-1.198-3.01-1.198-4.737 0-1.311.232-2.533.697-3.665a9.573 9.573 0 0 1 1.913-3.003 8.977 8.977 0 0 1 2.86-2.038 8.343 8.343 0 0 1 3.468-.733c1.454 0 2.8.34 4.04 1.019a8.995 8.995 0 0 1 3.093 2.735l-2.682 1.448a5.954 5.954 0 0 0-2.037-1.627 5.474 5.474 0 0 0-2.414-.572 5.378 5.378 0 0 0-3.02.894 6.304 6.304 0 0 0-2.128 2.342 6.66 6.66 0 0 0-.787 3.2 6.66 6.66 0 0 0 .787 3.2 6.491 6.491 0 0 0 2.145 2.323 5.429 5.429 0 0 0 3.003.876c.882 0 1.71-.202 2.485-.607a6.369 6.369 0 0 0 1.966-1.574Zm13.46 5.184c-1.644 0-3.146-.423-4.504-1.27a9.513 9.513 0 0 1-3.236-3.396c-.798-1.43-1.197-3.01-1.197-4.737 0-1.311.232-2.533.697-3.665a9.573 9.573 0 0 1 1.912-3.003 8.973 8.973 0 0 1 2.86-2.038 8.342 8.342 0 0 1 3.469-.733c1.346 0 2.58.274 3.7.822a8.361 8.361 0 0 1 2.896 2.253 9.534 9.534 0 0 1 1.806 3.36c.405 1.276.554 2.64.447 4.094H72.334c.143 1.013.477 1.919 1.001 2.717a5.911 5.911 0 0 0 2.003 1.877c.822.465 1.734.704 2.735.715 1.072 0 2.043-.274 2.914-.822.87-.56 1.573-1.323 2.109-2.288l3.057.715a9.422 9.422 0 0 1-3.236 3.897c-1.442 1.001-3.057 1.502-4.844 1.502Zm-5.827-10.673H83.9a5.857 5.857 0 0 0-.965-2.735 6.34 6.34 0 0 0-2.091-2.002c-.847-.5-1.77-.75-2.771-.75a5.347 5.347 0 0 0-2.753.732 6.219 6.219 0 0 0-2.074 1.984 6.51 6.51 0 0 0-1.001 2.771Zm28.614 10.208v-22.024h-2.807l.84-3.003h4.97v25.027h-3.003Zm11.842 0 5.345-9.224c-1.251.369-2.485.435-3.7.196a8.369 8.369 0 0 1-3.29-1.466 8.293 8.293 0 0 1-2.377-2.788c-.596-1.12-.894-2.366-.894-3.737 0-1.168.22-2.264.662-3.289a8.625 8.625 0 0 1 4.505-4.523 8.236 8.236 0 0 1 3.289-.661c1.549 0 2.955.381 4.218 1.144a8.682 8.682 0 0 1 3.057 3.075c.775 1.275 1.162 2.693 1.162 4.254 0 .847-.107 1.597-.321 2.253-.203.643-.513 1.347-.93 2.11l-7.258 12.656h-3.468Zm3.504-11.566c1.06 0 2.002-.25 2.824-.751a5.459 5.459 0 0 0 1.949-2.02 5.318 5.318 0 0 0 .715-2.682c0-1.036-.25-1.966-.75-2.788a5.462 5.462 0 0 0-2.003-1.967 5.248 5.248 0 0 0-2.7-.733c-1.06 0-2.008.257-2.842.769a5.603 5.603 0 0 0-1.948 2.038 5.422 5.422 0 0 0-.697 2.681c0 1.001.238 1.92.715 2.753a5.553 5.553 0 0 0 1.966 1.967 5.38 5.38 0 0 0 2.77.733Zm19.1 12.03c-1.55 0-2.956-.375-4.219-1.126a8.429 8.429 0 0 1-3.003-3.003c-.727-1.263-1.09-2.652-1.09-4.165h3.003c0 .965.238 1.853.715 2.663a5.442 5.442 0 0 0 1.913 1.913c.81.477 1.704.715 2.681.715.965 0 1.847-.238 2.646-.715a5.448 5.448 0 0 0 1.913-1.913 5.16 5.16 0 0 0 .715-2.663 5.37 5.37 0 0 0-.68-2.664c-.44-.81-1.09-1.454-1.948-1.93-.858-.49-1.901-.733-3.129-.733h-6.167l2.431-11.87h11.87v3.003h-9.439l-1.161 5.863 2.592.018c1.704.036 3.2.418 4.487 1.144 1.298.716 2.311 1.693 3.039 2.932.738 1.228 1.108 2.64 1.108 4.237a8.165 8.165 0 0 1-.644 3.218 8.368 8.368 0 0 1-1.787 2.645 8.372 8.372 0 0 1-2.646 1.788 7.954 7.954 0 0 1-3.2.644Zm19.971 0c-1.585 0-3.033-.393-4.344-1.18a9.039 9.039 0 0 1-3.146-3.146c-.786-1.322-1.18-2.782-1.18-4.38 0-.893.102-1.674.304-2.341.215-.668.53-1.388.948-2.163l7.079-12.281h3.486l-5.06 8.777a7.705 7.705 0 0 1 3.057-.34 8.07 8.07 0 0 1 2.879.823 8.553 8.553 0 0 1 2.43 1.787 8.315 8.315 0 0 1 1.663 2.575c.406.965.608 2.02.608 3.164 0 1.204-.232 2.33-.697 3.378a8.826 8.826 0 0 1-1.877 2.771 8.572 8.572 0 0 1-2.771 1.877 8.51 8.51 0 0 1-3.379.68Zm0-3.003c1.097 0 2.074-.268 2.932-.804a5.758 5.758 0 0 0 2.038-2.11c.5-.87.75-1.799.75-2.788a5.437 5.437 0 0 0-.768-2.843 5.664 5.664 0 0 0-2.056-2.055c-.858-.525-1.81-.787-2.86-.787-1.096 0-2.074.268-2.932.804a6.004 6.004 0 0 0-2.038 2.092 5.543 5.543 0 0 0-.733 2.789c0 1.084.263 2.056.787 2.914a5.856 5.856 0 0 0 2.074 2.038c.87.5 1.805.75 2.806.75Z"
        />
        <g transform="translate(248)">
          <path d="M46 56c15.464 0 28-12.536 28-28S61.464 0 46 0 18 12.536 18 28s12.536 28 28 28Zm0-8c11.045 0 20-8.954 20-20S57.044 8 46 8c-11.046 0-20 8.954-20 20s8.954 20 20 20Z" />
          <path d="M15.625 12C6.362 16.584 0 26.073 0 37.036 0 52.48 12.627 65 28.203 65 33.63 65 38.7 63.48 43 60.846a34.247 34.247 0 0 1-12.952-3.918c-.608.054-1.223.082-1.845.082-11.126 0-20.145-8.942-20.145-19.974 0-4.535 1.524-8.717 4.092-12.07A33.537 33.537 0 0 1 15.625 12Z" />
          <circle cx="55.5" cy="28.5" r="4.5" fillRule="nonzero" />
          <circle cx="41" cy="35" r="4" fillRule="nonzero" />
          <circle cx="44" cy="20" r="6" fillRule="nonzero" />
        </g>
      </g>
    </svg>
  );
}

export function CookieFactoryLogoWide({ className }: { className?: ClassName }) {
  return (
    <svg className={createClassName(baseStyles.svg, className)} viewBox="0 0 175 28">
      <path
        fillRule="nonzero"
        d="M9.752 21.364a9.037 9.037 0 0 1-3.738-.784 9.846 9.846 0 0 1-3.08-2.198 10.54 10.54 0 0 1-2.072-3.234A10.495 10.495 0 0 1 .12 11.2c0-1.41.247-2.725.742-3.948a10.323 10.323 0 0 1 2.072-3.234 9.656 9.656 0 0 1 3.08-2.184 8.903 8.903 0 0 1 3.738-.798c1.587 0 3.047.369 4.382 1.106a9.812 9.812 0 0 1 3.318 2.926L14.4 6.706a6.135 6.135 0 0 0-2.058-1.638 5.66 5.66 0 0 0-2.59-.616c-.859 0-1.666.177-2.422.532A6.083 6.083 0 0 0 5.342 6.44a6.697 6.697 0 0 0-1.33 2.156 7.09 7.09 0 0 0-.476 2.604c0 .933.159 1.806.476 2.618a7.12 7.12 0 0 0 1.344 2.156A6.414 6.414 0 0 0 7.33 17.43a5.76 5.76 0 0 0 2.422.518c.933 0 1.801-.205 2.604-.616A6.333 6.333 0 0 0 14.4 15.68l3.052 1.652a10.014 10.014 0 0 1-3.318 2.926c-1.335.737-2.795 1.106-4.382 1.106Zm14.98 0a6.54 6.54 0 0 1-3.528-.994 7.452 7.452 0 0 1-2.534-2.66c-.626-1.12-.938-2.357-.938-3.71 0-1.027.182-1.983.546-2.87a7.499 7.499 0 0 1 1.498-2.352 7.026 7.026 0 0 1 2.24-1.596 6.535 6.535 0 0 1 2.716-.574c1.288 0 2.459.331 3.514.994a7.266 7.266 0 0 1 2.534 2.674c.634 1.12.952 2.361.952 3.724 0 1.017-.182 1.97-.546 2.856a7.584 7.584 0 0 1-1.512 2.352 6.97 6.97 0 0 1-2.226 1.582 6.473 6.473 0 0 1-2.716.574Zm0-3.416c.68 0 1.292-.182 1.834-.546a3.81 3.81 0 0 0 1.274-1.442c.317-.597.476-1.25.476-1.96 0-.728-.164-1.39-.49-1.988a3.743 3.743 0 0 0-1.302-1.442 3.143 3.143 0 0 0-1.792-.546c-.672 0-1.28.182-1.82.546-.542.364-.971.85-1.288 1.456A4.194 4.194 0 0 0 21.148 14c0 .737.163 1.405.49 2.002.326.597.76 1.073 1.302 1.428a3.31 3.31 0 0 0 1.792.518ZM39.7 21.364a6.54 6.54 0 0 1-3.529-.994 7.453 7.453 0 0 1-2.533-2.66c-.626-1.12-.938-2.357-.938-3.71 0-1.027.181-1.983.546-2.87a7.5 7.5 0 0 1 1.497-2.352 7.028 7.028 0 0 1 2.24-1.596 6.535 6.535 0 0 1 2.717-.574c1.287 0 2.459.331 3.513.994a7.265 7.265 0 0 1 2.535 2.674c.634 1.12.952 2.361.952 3.724 0 1.017-.183 1.97-.547 2.856a7.584 7.584 0 0 1-1.512 2.352 6.968 6.968 0 0 1-2.226 1.582 6.473 6.473 0 0 1-2.715.574Zm0-3.416c.68 0 1.292-.182 1.834-.546a3.808 3.808 0 0 0 1.274-1.442c.317-.597.476-1.25.476-1.96 0-.728-.164-1.39-.49-1.988a3.741 3.741 0 0 0-1.302-1.442 3.143 3.143 0 0 0-1.792-.546c-.672 0-1.28.182-1.82.546-.542.364-.971.85-1.289 1.456A4.195 4.195 0 0 0 36.115 14c0 .737.164 1.405.49 2.002.327.597.761 1.073 1.303 1.428a3.31 3.31 0 0 0 1.791.518ZM60.59 21h-3.934l-3.193-5.502-1.96 2.338V21h-3.415V0h3.416v12.53L56.138 7h4.466l-4.802 5.726L60.59 21Zm1.642-14h3.416v14h-3.416V7Zm1.736-1.806c-.504 0-.929-.163-1.274-.49a1.687 1.687 0 0 1-.518-1.26c0-.495.173-.91.518-1.246a1.738 1.738 0 0 1 1.26-.504c.495 0 .91.168 1.246.504.345.336.518.751.518 1.246 0 .504-.168.924-.504 1.26-.336.327-.751.49-1.246.49Zm10.085 16.17a6.54 6.54 0 0 1-3.528-.994 7.419 7.419 0 0 1-2.534-2.674c-.625-1.12-.938-2.357-.938-3.71 0-1.017.182-1.97.546-2.856a7.493 7.493 0 0 1 1.498-2.352 7.03 7.03 0 0 1 2.24-1.596 6.535 6.535 0 0 1 2.716-.574c1.092 0 2.091.233 2.996.7a6.81 6.81 0 0 1 2.324 1.89 7.763 7.763 0 0 1 1.386 2.744c.289 1.027.355 2.1.196 3.22H70.721c.131.523.345.994.644 1.414.299.41.677.742 1.134.994a3.38 3.38 0 0 0 1.554.378c.597.01 1.139-.13 1.624-.42.495-.299.905-.7 1.232-1.204l3.486.812a7.483 7.483 0 0 1-2.548 3.052c-1.129.784-2.394 1.176-3.794 1.176ZM70.609 12.6h6.888a3.557 3.557 0 0 0-.658-1.512 3.695 3.695 0 0 0-1.218-1.092 3.166 3.166 0 0 0-1.568-.406 3.09 3.09 0 0 0-1.554.406c-.476.261-.882.62-1.218 1.078a3.947 3.947 0 0 0-.672 1.526ZM87.068 21V1.4h11.578v3.416h-8.162v3.976h6.818v3.416h-6.818V21h-3.416Zm22.551-14h3.416v14h-3.416l-.154-1.736a4.597 4.597 0 0 1-1.526 1.526c-.626.383-1.368.574-2.226.574a7.248 7.248 0 0 1-2.912-.588 7.64 7.64 0 0 1-2.394-1.624 7.766 7.766 0 0 1-1.61-2.394 7.396 7.396 0 0 1-.574-2.912c0-.999.182-1.937.546-2.814a7.281 7.281 0 0 1 3.85-3.864 7.01 7.01 0 0 1 2.8-.56c.924 0 1.75.205 2.478.616.737.41 1.362.933 1.876 1.568L109.619 7Zm-3.99 11.074c.728 0 1.372-.182 1.932-.546a3.79 3.79 0 0 0 1.316-1.47 4.486 4.486 0 0 0 .476-2.058 4.43 4.43 0 0 0-.476-2.058 3.731 3.731 0 0 0-1.33-1.484c-.56-.364-1.2-.546-1.918-.546a3.65 3.65 0 0 0-1.974.56 4.103 4.103 0 0 0-1.414 1.47 4.129 4.129 0 0 0-.518 2.058c0 .756.177 1.442.532 2.058a4.103 4.103 0 0 0 1.414 1.47c.597.364 1.25.546 1.96.546Zm18.176-1.288 3.08 1.666a7.349 7.349 0 0 1-2.422 2.114 6.505 6.505 0 0 1-3.178.798 6.54 6.54 0 0 1-3.528-.994 7.444 7.444 0 0 1-2.534-2.66c-.626-1.12-.938-2.357-.938-3.71 0-1.027.182-1.983.546-2.87a7.493 7.493 0 0 1 1.498-2.352 7.02 7.02 0 0 1 2.24-1.596 6.532 6.532 0 0 1 2.716-.574c1.148 0 2.207.266 3.178.798a7.223 7.223 0 0 1 2.422 2.142l-3.08 1.652a3.426 3.426 0 0 0-1.162-.868 3.173 3.173 0 0 0-1.358-.308c-.672 0-1.279.187-1.82.56-.542.364-.971.85-1.288 1.456a4.105 4.105 0 0 0-.476 1.96c0 .7.158 1.353.476 1.96a3.916 3.916 0 0 0 1.288 1.442 3.188 3.188 0 0 0 1.82.546c.485 0 .947-.103 1.386-.308.438-.215.816-.5 1.134-.854Zm12.117-6.37h-2.716V21h-3.416V10.416h-2.072V7h2.072V2.604h3.416V7h2.716v3.416Zm7.011 10.948a6.54 6.54 0 0 1-3.528-.994 7.452 7.452 0 0 1-2.534-2.66c-.625-1.12-.938-2.357-.938-3.71 0-1.027.182-1.983.546-2.87a7.493 7.493 0 0 1 1.498-2.352 7.03 7.03 0 0 1 2.24-1.596 6.535 6.535 0 0 1 2.716-.574c1.288 0 2.459.331 3.514.994a7.263 7.263 0 0 1 2.534 2.674c.635 1.12.952 2.361.952 3.724 0 1.017-.182 1.97-.546 2.856a7.584 7.584 0 0 1-1.512 2.352 6.977 6.977 0 0 1-2.226 1.582 6.472 6.472 0 0 1-2.716.574Zm0-3.416c.681 0 1.293-.182 1.834-.546a3.812 3.812 0 0 0 1.274-1.442c.317-.597.476-1.25.476-1.96a4.07 4.07 0 0 0-.49-1.988 3.737 3.737 0 0 0-1.302-1.442 3.143 3.143 0 0 0-1.792-.546c-.672 0-1.279.182-1.82.546-.541.364-.971.85-1.288 1.456a4.199 4.199 0 0 0-.476 1.974c0 .737.163 1.405.49 2.002a3.93 3.93 0 0 0 1.302 1.428 3.311 3.311 0 0 0 1.792.518ZM151.195 21l-.014-14h3.416l.014 1.246a5.155 5.155 0 0 1 1.708-1.19 5.154 5.154 0 0 1 2.142-.448c.513 0 1.027.075 1.54.224l-1.344 3.444a2.912 2.912 0 0 0-2.576.196c-.448.261-.807.62-1.078 1.078a2.921 2.921 0 0 0-.392 1.498V21h-3.416Zm19.244-14h3.626l-7.658 21h-3.626l2.534-7-5.04-14h3.738l3.01 9.324L170.439 7Z"
      />
    </svg>
  );
}
