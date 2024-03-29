import { OmitType } from '@nestjs/swagger';

import { CreateSubtopicDto } from './create-subtopic.dto';

export class UpdateSubtopicDto extends OmitType(CreateSubtopicDto, [
  'topicId',
] as const) {}
