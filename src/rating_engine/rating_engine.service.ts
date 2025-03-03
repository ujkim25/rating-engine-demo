import { Injectable } from '@nestjs/common';
import { RatingEngineDto } from './rating_engine.dto';
import { RadarLiveResponse } from './rating_engine.interface';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { RadarLiveRequest } from './radar_live_request.interface';

@Injectable()
export class RatingEngineService {
    constructor(private readonly httpService: HttpService) {}

    async computePremiumMock(dto: RatingEngineDto): Promise<number> {
        const total_premium = dto.prm_medpay_limit*1.2;
        return total_premium;
    }

    async computePremium(dto: RatingEngineDto): Promise<RadarLiveResponse> {
        // Radar Live API 문서에 따라, POST URL / 파라미터 / 헤더 설정
        const url = process.env.RADAR_LIVE_URL || 'https://mock.thekitchen.work/compute-premium';
        const headers = {
            // Authorization: 'Bearer YOUR_RADAR_LIVE_API_KEY',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin":'*'
        };

        const data = this.mapToRadarLiveRequest(dto);

        // body에 data를 그대로 전송한다고 가정 (Radar Live가 요구하는 필드명에 맞춰 매핑해야 함)
        try {
            console.log("posting");
            const response$ = this.httpService.post(url, data, { headers });
            //NestJS의 HttpService(구 @nestjs/axios)는 기본적으로 RxJS Observable을 반환합니다.
            //여기서 response$는 Observable 객체로, 아직 실제 네트워크 요청이 완료된 상태가 아닙니다.
            //RxJS Observable은 “스트림” 개념입니다. 요청이 완료된 시점에 **구독(subscribe)**하거나 toPromise 계열 함수를 써야 실제 데이터가 전달됩니다.
            const response = await lastValueFrom(response$);
            //lastValueFrom(response$)는 “이 Observable이 완료될 때(한 번의 응답이 온 뒤) 마지막 값을 Promise로 만들어 반환” 합니다.
            //즉, lastValueFrom을 통해 “Observable → Promise” 변환이 일어남.
            //변환된 Promise를 await로 처리하면, 실제 HTTP 응답(response.data)을 얻을 수 있게 됩니다.
            // response.data가 Radar Live가 주는 최종 계산 결과
            return response.data as RadarLiveResponse;
        } catch (error) {
            console.error('Error calling Radar Live API:', error);
            throw error;
        }
    }

    mapToRadarLiveRequest(dto: RatingEngineDto): RadarLiveRequest {
        return {
            age: dto.ins_age,
            yearModel: dto.veh_year_model,
            medicalPayments: dto.prm_medpay_limit,
        };
    }
}
