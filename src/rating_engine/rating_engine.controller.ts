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
        dto.uw_status = "Declined";
        dto.uw_message = `${dto.ins_rank} can not be covered!`;
        return dto;
    }

    async uwAccepted(dto: RatingEngineDto) {
        dto.uw_status = "Accepted"
        dto.uw_message = "";
        const radarLiveResponse: RadarLiveResponse = await this.ratingEngineService.computePremium(dto);
        // 만약 **await**을 쓰지 않으면, computeInsurance()이 반환하는 Promise 객체만 받게 되고, 실제 결과값을 확인하기 위해서는 .then()이나 콜백으로 접근해야 합니다.
        dto.prm_total_premium = radarLiveResponse.totalPremium;
        dto.prm_net_premium = radarLiveResponse.netPremium;
        dto.prm_gross_premium = radarLiveResponse.grossPremium;
        return dto;
    }
}
