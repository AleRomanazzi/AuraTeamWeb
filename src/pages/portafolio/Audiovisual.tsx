import VideoGallery from '../../components/VideoGallery';
import ShareLinkButton from '../../components/ShareLinkButton';

export default function Audiovisual() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.75rem' }}>
        <ShareLinkButton title="AuraTeam — Audiovisual" />
      </div>
      <VideoGallery />
    </>
  );
}
