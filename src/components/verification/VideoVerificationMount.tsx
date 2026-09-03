import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../../context/LanguageContext';
import VideoVerificationCard from './VideoVerificationCard';

export default function VideoVerificationMount() {
  const { lang } = useLanguage();
  const [node, setNode] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    setNode(document.querySelector('.js-video-verification-mount') as HTMLElement | null);
  }, [lang]);

  if (!node) return null;
  return createPortal(<VideoVerificationCard />, node);
}
