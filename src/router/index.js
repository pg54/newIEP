/**
 * Created by pangang on 2017/4/7.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../pages/Login.vue';
import Print from '../pages/Print.vue';
import PhysicalPrinter from '../pages/PhysicalPrinter.vue';
import AutismPrinter from '../pages/AutismPrinter.vue';
import HearingPrinter from '../pages/HearingPrinter.vue';
import MentalPrinter from '../pages/MentalPrinter.vue';
import Home from '../pages/Home.vue';

import AuthManage from '../pages/AuthManage/AuthManage.vue';
import TextEditor from '../pages/text-editor/text-editor.vue';
import CoopGroup from '../pages/CoopGroup/CoopGroup.vue';
import ServiceReview from '../pages/ServiceReview/ServiceReview.vue';

const DynamicConsultation = r => require.ensure([], () => r(require('../pages/DymamicConsultation/DymamicConsultation.vue')), 'group-a')
const DymaEdu = r => require.ensure([], () => r(require('../pages/DymamicConsultation/child/DymaEdu.vue')), 'group-a')
const DymaNews = r => require.ensure([], () => r(require('../pages/DymamicConsultation/child/DymaNews.vue')), 'group-a')
const DymaArticle = r => require.ensure([], () => r(require('../pages/DymamicConsultation/child/DymaArticle.vue')), 'group-a')
const DymaTraining = r => require.ensure([], () => r(require('../pages/DymamicConsultation/child/DymaTraining.vue')), 'group-a')


const InformCoope = r => require.ensure([], () => r(require('../pages/InformCooperation/NoticeCoope.vue')), 'group-b')

import studentFile from '../pages/rehabilitationFile/MyStudentFile.vue';
import RehabilitationFile from '../pages/rehabilitationFile/rehabilitationFile.vue';
import RFAnalysis from '../pages/rehabilitationFile/RF-Analysis/RF-Analysis.vue';
import RFEntrance from '../pages/rehabilitationFile/RF-Entrance/RF-Entrance.vue';

import RFAssessment from '../pages/rehabilitationFile/RF-Assessment/RF-Assessment.vue';
import RFRegister from '../pages/rehabilitationFile/RF-Register/RF-Register.vue';
import RFPlan from '../pages/rehabilitationFile/RF-Plan/RF-Plan.vue';
import RFRecord from '../pages/rehabilitationFile/RF-Record/RF-Record.vue';
import RFTrack from '../pages/rehabilitationFile/RF-Track/RF-Track.vue';
import RFAttachment from '../pages/rehabilitationFile/RF-Attachment/RF-Attachment.vue';

const studentTrack = r => require.ensure([], () => r(require('../pages/MyStudentTrack/MyStudentTrack.vue')), 'group-d')

const ServiceManage = r => require.ensure([], () => r(require('../pages/myService/child/MyServiceManage.vue')), 'group-e')
const MyService = r => require.ensure([], () => r(require('../pages/myService/MyService.vue')), 'group-e')
const ServiceFile = r => require.ensure([], () => r(require('../pages/myService/MyServiceFile.vue')), 'group-e')
const ServiceAgency = r => require.ensure([], () => r(require('../pages/myService/MyServiceAgency.vue')), 'group-e')


const ServiceTool = r => require.ensure([], () => r(require('../pages/ServiceArrangement/ServiceTool.vue')), 'group-f')

const ServiceDynamics = r => require.ensure([], () => r(require('../pages/ServiceArrangement/serviceDynamics/serviceDynamics.vue')), 'group-f')
const Consultancy = r => require.ensure([], () => r(require('../pages/ServiceArrangement/consultancy/consultancy.vue')), 'group-f')
const TestManage = r => require.ensure([], () => r(require('../pages/serviceArrangement/testManage/testManage.vue')), 'group-f')
const TrainingManagement = r => require.ensure([], () => r(require('../pages/ServiceArrangement/trainingManagement/trainingManagement.vue')), 'group-f')
const VisitCenter = r => require.ensure([], () => r(require('../pages/ServiceArrangement/visitCenter/visitCenter.vue')), 'group-f')
const CPEP = r => require.ensure([], () => r(require('../pages/ServiceArrangement/CPEP/cpep.vue')), 'group-f')
const ServiceCPEP = r => require.ensure([], () => r(require('../components/serviceCPEP.vue')), 'group-f')

const EntranceTest = r => require.ensure([], () => r(require('../pages/ServiceArrangement/entranceTest/entranceTest.vue')), 'group-f')




const ReportPaper = r => require.ensure([], () => r(require('../components/reportPaper.vue')), 'group-f')
const ResultPaper = r => require.ensure([], () => r(require('../components/resultPaper.vue')), 'group-f')

const SendQuestionnaire = r => require.ensure([], () => r(require('../pages/ServiceArrangement/consultancy/sendQuestionnaire/sendQuestionnaire.vue')), 'group-f')




// const TestedCPEP = r => require.ensure([], () => r(require('../pages/ServiceArrangement/CPEP/testedCPEP/testedCPEP.vue')), 'group-f')

const IEP = r => require.ensure([], () => r(require('../pages/IEP/IEP.vue')), 'group-g')
const IEPBasicInfo = r => require.ensure([], () => r(require('../pages/IEP/IEP-BasicInfo/IEP-BasicInfo.vue')), 'group-g')
const IEPaAnalysis = r => require.ensure([], () => r(require('../pages/IEP/IEP-Analysis/IEP-Analysis.vue')), 'group-g')
const IEPPlan = r => require.ensure([], () => r(require('../pages/IEP/IEP-Plan/IEP-Plan.vue')), 'group-g')
const IEPSchedule = r => require.ensure([], () => r(require('../pages/IEP/IEP-Schedule/IEP-Schedule.vue')), 'group-g')
const IEPlibrary = r => require.ensure([], () => r(require('../pages/IEP/IEP-library/IEP-library.vue')), 'group-g')
const IEPStudy = r => require.ensure([], () => r(require('../pages/IEP/IEP-study/IEP-study.vue')), 'group-g')
const IEPSummary = r => require.ensure([], () => r(require('../pages/IEP/IEP-Summary/IEP-Summary.vue')), 'group-g')
const IEPRecord = r => require.ensure([], () => r(require('../pages/IEP/IEP-Record/IEP-Record.vue')), 'group-g')
const IEPFeedback = r => require.ensure([], () => r(require('../pages/IEP/IEP-Feedback/IEP-Feedback.vue')), 'group-g')

const DataAnalysis = r => require.ensure([], () => r(require('../pages/DataAnalysis/DataAnalysis.vue')), 'group-h')

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/print',
            name: 'print',
            component: Print
        },
        {
            path: '/physicalPrinter',
            name: 'physicalPrinter',
            component: PhysicalPrinter
        },
        {
            path: '/autismPrinter',
            name: 'autismPrinter',
            component: AutismPrinter
        },
        {
            path: '/hearingPrinter',
            name: 'hearingPrinter',
            component: HearingPrinter
        },
        {
            path: '/mentalPrinter',
            name: 'mentalPrinter',
            component: MentalPrinter
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                {
                    path: 'dynamicConsultation',
                    component: DynamicConsultation,
                    name: 'dynamicConsultation',
                    children: [
                        { path: 'dymaNews', component: DymaNews, name: 'dymaNews' },
                        { path: 'dymaEdu', component: DymaEdu, name: 'dymaEdu' },
                        { path: 'dymaArticle', component: DymaArticle, name: 'dymaArticle' },
                        { path: 'dymaTraining', component: DymaTraining, name: 'dymaTraining' }
                    ]
                }
            ]
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
            ]
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                {
                    path: 'informCoope',
                    component: InformCoope,
                    name: 'informCoope'
                    // children: [
                    //   { path: 'dynamicTracking', component: DynamicTracking, name: 'dynamicTracking' },
                    //   { path: 'noticeReminder', component: NoticeReminder, name: 'noticeReminder' }
                    // ]
                }
            ]
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                {
                    path: 'studentTrack',
                    component: studentTrack,
                    name: 'studentTrack'
                }
            ]
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                {
                    path: 'iep',
                    component: IEP,
                    name: 'iep',
                    children: [
                        { path: 'iepBasicInfo', component: IEPBasicInfo, name: 'iepBasicInfo' },
                        {
                            path: 'iepAnalysis', component: IEPaAnalysis,
                            children: [
                                { path: 'reportPaper', component: ReportPaper},
                                { path: 'resultPaper', component: ResultPaper},
                            ]
                        },
                        { path: 'iepPlan', component: IEPPlan, name: 'iepPlan' },
                        { path: 'iepSchedule', component: IEPSchedule, name: 'iepSchedule' },
                        { path: 'ieplibrary', component: IEPlibrary, name: 'ieplibrary' },
                        { path: 'iepStudy', component: IEPStudy, name: 'iepStudy' },
                        { path: 'iepSummary', component: IEPSummary, name: 'iepSummary' },
                        { path: 'iepRecord', component: IEPRecord, name: 'iepRecord' },
                        { path: 'iepFeedback', component: IEPFeedback, name: 'iepFeedback' }
                    ]
                }
            ]
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                {
                    path: 'myService',
                    component: MyService,
                    name: 'myService',
                    children: [
                        { path: 'serviceManage', component: ServiceManage, name: 'serviceManage' },
                        { path: 'serviceFile', component: ServiceFile, name: 'serviceFile' },
                        { path: 'serviceAgency', component: ServiceAgency, name: 'serviceAgency' }
                    ]
                }
            ]
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                {
                    path: 'studentFile',
                    component: studentFile,
                    name: 'studentFile',
                    children: [
                        {
                            path: 'rehabilitationFile',
                            component: RehabilitationFile,
                            name: 'rehabilitationFile',
                            children: [
                                { path: 'rFAnalysis', component: RFAnalysis, name: 'rFAnalysis' },
                                { path: 'rFEntrance', component: RFEntrance, name: 'rFEntrance' },
                                { path: 'rFAssessment', component: RFAssessment, name: 'rFAssessment' },
                                { path: 'rFRegister', component: RFRegister, name: 'rFRegister' },
                                { path: 'rFPlan', component: RFPlan, name: 'rFPlan' },
                                { path: 'rFRecord', component: RFRecord, name: 'rFRecord' },
                                { path: 'rFTrack', component: RFTrack, name: 'rFTrack' },
                                { path: 'rFAttachment', component: RFAttachment, name: 'rFAttachment' },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                {
                    path: 'serviceTool',
                    component: ServiceTool,
                    name: 'serviceTool',
                    children: [
                        {
                            path: 'consultancy', component: Consultancy, name: 'consultancy',
                            children:
                                [
                                    { path: 'sendQuestionnaire', component: SendQuestionnaire, name: 'sendQuestionnaire',},
                                ]
                        },
                        {
                            path: 'testManage', component: TestManage,
                            children: [
                                { path: 'reportPaper', component: ReportPaper},
                                { path: 'resultPaper', component: ResultPaper},
                            ]
                        },
                        { path: 'serviceDynamics', component: ServiceDynamics, name: 'serviceDynamics' },
                        {
                            path: 'cpep', component: CPEP, name: 'cpep',
                            children:
                                [
                                    // { path: 'serviceCPEP/:cpepData/:pacientID/:isResultPage/:isFirstTimeTest:/cpepMemberID', component: ServiceCPEP, name: 'serviceCPEP', props: true}
                                    { path: 'serviceCPEP', component: ServiceCPEP}
                                ]
                        },
                        {
                            path: 'entranceTest', component: EntranceTest, name: 'entranceTest',
                            children: [
                                { path: 'reportPaper', component: ReportPaper},
                                { path: 'resultPaper', component: ResultPaper},
                            ]
                        },
                        {
                            path: 'trainingManagement', component: TrainingManagement, name: 'trainingManagement',
                            children: [
                                { path: 'sendQuestionnaire', component: SendQuestionnaire, name: 'sendQuestionnaire',},
                            ]

                        },
                        {
                            path: 'visitCenter', component: VisitCenter, name: 'visitCenter',
                            children: [
                                { path: 'sendQuestionnaire', component: SendQuestionnaire, name: 'sendQuestionnaire',},
                            ]

                        }
                    ]
                }
            ]
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                { path: 'coopGroup', component: CoopGroup, name: 'coopGroup' }
            ]
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                { path: 'dataAnalysis', component: DataAnalysis, name: 'dataAnalysis' }
                // { path: 'echartsAnalysis', component: EchartsAnalysis, name: 'echartsAnalysis' }
            ]
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                { path: 'serviceReview', component: ServiceReview, name: 'serviceReview' }
            ]
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                { path: 'textEditor', component: TextEditor, name: 'textEditor' }
            ]
        },
    ]
});
