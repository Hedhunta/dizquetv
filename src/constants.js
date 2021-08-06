module.exports = {
    SLACK: 9999,
    TVGUIDE_MAXIMUM_PADDING_LENGTH_MS:    30*60*1000,
    DEFAULT_GUIDE_STEALTH_DURATION: 5 * 60* 1000,
    TVGUIDE_MAXIMUM_FLEX_DURATION : 6 * 60 * 60 * 1000,
    TOO_FREQUENT: 100,

    // if a channel is stopped while something is playing, subtract
    // this amount of milliseconds from the last-played timestamp, because
    // video playback has latency and also because maybe the user wants
    // the last 30 seconds to remember what was going on...
    FORGETFULNESS_BUFFER:  30 * 1000,

    // When a channel stops playing, this is a grace period before the channel is
    // considered offline. It could be that the client halted the playback for some
    // reason and is about to start playing again. Or maybe the user switched
    // devices or something. Otherwise we would have on-demand channels constantly
    // reseting on their own.
    MAX_CHANNEL_IDLE: 60*1000,

    // there's a timer that checks all active channels to see if they really are
    // staying active, it checks every 5 seconds
    PLAYED_MONITOR_CHECK_FREQUENCY: 5*1000,

    VERSION_NAME: "1.5.0-development"
}
