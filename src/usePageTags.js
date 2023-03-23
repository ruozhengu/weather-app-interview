import { useEffect } from 'react';

const usePageTags = ({ title}) => {
  useEffect(() => {
    document.title = title || '';
    const metaTags = [
      { name: 'description', content: "A simple weather app for Gabriel's interview question" },
      { name: 'author', content: "Gabriel Gu" },
    ];

    metaTags.forEach(({ name, content }) => {
      const tag = document.querySelector(`meta[name="${name}"]`);
      if (tag) {
        tag.setAttribute('content', content || '');
      } else {
        const newTag = document.createElement('meta');
        newTag.setAttribute('name', name);
        newTag.setAttribute('content', content || '');
        document.head.appendChild(newTag);
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);
}

export default usePageTags;