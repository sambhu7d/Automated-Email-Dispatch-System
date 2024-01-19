function send_email(e) 
{
  range=e.range;
  //range.setNote('Last modified: ' + new Date());
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var col=range.getColumn();
  var row =range.getRow();
  //sheet.autoResizeColumn(col); 
  //sheet.autoResizeRows(row);

  if (col == 11)
  {
   if (e.value=="Send Via CP")
   {
     var rowdata= sheet.getRange(row,1,1,col).getValues();
     var row=rowdata[0]
     //Logger.log(row)

     var engL = DriveApp.getFileById("")//Letter in english
     var hinL = DriveApp.getFileById("")//Letter in hindi
     //var message = filterMessage(row[0],row[1]) 

     var templ = HtmlService.createTemplateFromFile('msg');
     templ.name = row[2];
     templ.contact = row[3];
     var send = templ.evaluate().getContent();
     //Logger.log(message)

     MailApp.sendEmail(String(row[9]),"Subject","Check Attachment", {
           cc:String(row[4]),
           name: 'EMAIL',
           htmlBody: send,
           attachments: [engL,hinL]

});

     Logger.log("Done");
    
    }
  }
}