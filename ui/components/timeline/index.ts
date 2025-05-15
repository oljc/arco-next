import { withInstall } from '../_utils/withInstall';
import _Timeline from './timeline';
import _TimelineItem from './item.vue';

const Timeline = withInstall(_Timeline, {
  Item: _TimelineItem,
});

export type TimelineInstance = InstanceType<typeof _Timeline>;
export type TimelineItemInstance = InstanceType<typeof _TimelineItem>;

export { _TimelineItem as TimelineItem };

export default Timeline;
