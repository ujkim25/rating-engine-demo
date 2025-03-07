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
        console.log("Performing UW");
        const message: string[] = [];
        const rank: string[] = ['E5', 'E6', 'E7', 'E8', 'E9', 'Officer'];

        if (dto.ins_age < 21) {
            message.push(`${dto.ins_age} can not be covered!;`);
        }
        if (dto.veh_year_model < 1970) {
            message.push(`${dto.veh_year_model} can not be covered!;`);
        }
        if (!rank.includes(dto.ins_rank)) {
            message.push(`${dto.ins_rank} can not be covered!;`);
        }

        if (message.length > 0) {
            console.log("UW Declined");
            return this.uwDeclined(dto, message);
        }else {
            console.log("UW Accepted");
            return this.uwAccepted(dto);
        }
    }

    uwDeclined(dto: RatingEngineDto, message: string[]) {
        const result = { ...dto };
        result.uw_status = "Declined";
        result.uw_message = message.join(' ')
        return result;
    }

    async uwAccepted(dto: RatingEngineDto) {
        const result = { ...dto }; // 얕은 복사: 원본 dto의 속성들을 복사하여 새로운 객체 생성
        result.uw_status = "Accepted"; // 새로운 객체에 상태 업데이트
        result.uw_message = "Passed Underwriting"; // 메시지 업데이트
        console.log("calling mock up");
        const radarLiveResponse: RadarLiveResponse = await this.ratingEngineService.computePremium(dto);
        // 만약 **await**을 쓰지 않으면, computeInsurance()이 반환하는 Promise 객체만 받게 되고, 실제 결과값을 확인하기 위해서는 .then()이나 콜백으로 접근해야 합니다.
        result.prm_comp_premium = radarLiveResponse.prm_comp_premium;
        result.prm_coll_premium = radarLiveResponse.prm_coll_premium;
        result.prm_loss_premium = radarLiveResponse.prm_loss_premium;
        result.prm_bi_premium = radarLiveResponse.prm_bi_premium;
        result.prm_pd_premium = radarLiveResponse.prm_pd_premium;
        result.prm_medpay_premium = radarLiveResponse.prm_medpay_premium;
        result.prm_gross_premium = radarLiveResponse.prm_gross_premium;
        result.prm_net_premium = radarLiveResponse.prm_net_premium;
        result.prm_total_premium = radarLiveResponse.prm_total_premium;
        return result;
    }
}
