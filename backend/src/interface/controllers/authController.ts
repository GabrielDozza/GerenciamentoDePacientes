import { Body, Controller, Post } from "@nestjs/common";

@Controller("auth")
export class authController {
    @Post("login")
    async postAuth(@Body() body: any) {
        
    };
};