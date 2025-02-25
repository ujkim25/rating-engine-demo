import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { RatingEngineDto } from './rating_engine.dto';
import { RatingEngineService } from './rating_engine.service';
import { RadarLiveResponse } from './rating_engine.interface';
import { RadarLiveRequest } from './radar_live_request.interface';

@ApiTags('getPremium') // Swagger에서 이 컨트롤러를 'RatingEngine' 태그로 분류
@Controller('getPremium')
export class RatingEngineController {
    constructor(private readonly ratingEngineService: RatingEngineService) {}

    @Post()
    @ApiOperation({ summary: 'Underwriting & Premium Calculation' })
    @ApiBody({ type: RatingEngineDto }) // 요청 Body에 RatingEngineDto가 온다는 점을 명시
    @ApiResponse({
        status: 201,
        description: 'Successfully processed the underwriting & premium calculation',
        type: RatingEngineDto,
    })
    async uwCalculate(@Body() dto: RatingEngineDto): Promise<RatingEngineDto> {
        if (dto.ins_rank === "Officer") {
            return this.uwDeclined(dto);
        }else {
            return this.uwAccepted(dto);
        }
    }

    uwDeclined(dto: RatingEngineDto) {
        const result = { ...dto };
        result.uw_status = "Declined";
        result.uw_message = `${result.ins_rank} can not be covered!`;
        return result;
    }

    async uwAccepted(dto: RatingEngineDto) {
        const result = { ...dto }; // 얕은 복사: 원본 dto의 속성들을 복사하여 새로운 객체 생성
        result.uw_status = "Accepted"; // 새로운 객체에 상태 업데이트
        result.uw_message = "Passed Underwriting"; // 메시지 업데이트
        const radarLiveResponse: RadarLiveResponse = await this.ratingEngineService.computePremium(dto);
        // 만약 **await**을 쓰지 않으면, computeInsurance()이 반환하는 Promise 객체만 받게 되고, 실제 결과값을 확인하기 위해서는 .then()이나 콜백으로 접근해야 합니다.
        result.prm_total_premium = radarLiveResponse.totalPremium;
        result.prm_net_premium = radarLiveResponse.netPremium;
        result.prm_gross_premium = radarLiveResponse.grossPremium;
        return result;
    }
}
