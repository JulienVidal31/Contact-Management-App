import { Controller, Get, Post,Put, Delete, Body, Param, Patch } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from  '../entities/contact.entity';
import { isContext } from 'vm';

@Controller('contacts')
export class ContactController {

    constructor(private contactService: ContactService){
    }

    @Get()
    read(): Promise<Contact[]> {
      return this.contactService.readAll();
    }
    
    @Post('create')
    async create(@Body() contact: Contact): Promise<any> {
      return this.contactService.create(contact);
    }  
    
    @Patch(':id/update')
    async update(@Param('id') id, @Body() contact: Contact): Promise<any> {
        contact.id = Number(id);
        return this.contactService.update(contact);
    }  
    
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.contactService.delete(id);
    }

}