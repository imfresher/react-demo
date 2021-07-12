import React from 'react';
import { FormattedMessage } from 'react-intl';
import FrontendLayout from 'views/layouts/FrontendLayout';
import VideoPlayer from 'views/components/VideoPlayer';
import WatchSidebar from 'views/frontend/_partial/WatchSidebar';
import { videos } from 'services/fake';

function WatchPage(props) {
  const video = videos[0];

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    fluid: true,
    controlBar: {
      volumePanel: { inline: false },
      remainingTimeDisplay: false,
      // subsCapsButton: true,
      // ResolutionButton: true,
      children: [
        "playToggle",
        "volumePanel",
        "currentTimeDisplay",
        "timeDivider",
        "durationDisplay",
        "progressControl",
        "liveDisplay",
        "remainingTimeDisplay",
        "customControlSpacer",
        "playbackRateMenuButton",
        "chaptersButton",
        "descriptionsButton",
        "subsCapsButton",
        "audioTrackButton",
        "chromeCastButton",
        "ResolutionButton",
        "settingMenuButton",
        "pictureInPictureToggle",
        "fullscreenToggle"
      ]
    },
    sources: [
      {
        src: '//vjs.zencdn.net/v/oceans.mp4',
        type: 'video/mp4',
      },
    ],
  };

  return (
    <FrontendLayout>
      <div className="WatchPage px-5">
        <div className="WatchPage__container container-fluid">
          <div className="row">
            <section id="Watch__content" className="col-9">
              {/* <h1><FormattedMessage id="WatchPage.title" /></h1>
              <p><FormattedMessage id="doc.Lifecycle.text" /></p> */}

              <div className="Video">
                <VideoPlayer {...videoJsOptions} />
                <h3 className="mt-2">{ video.title }</h3>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="group">
                    <p>{ video.views } <FormattedMessage id="common.views" /></p>
                    <span>{ video.author.name }</span>
                  </div>
                  <small className="text-muted">{ video.time }</small>
                </div>
              </div>
            </section>

            <WatchSidebar className="col-3"/>
          </div>
        </div>
      </div>
    </FrontendLayout>
  );
}

export default WatchPage;
