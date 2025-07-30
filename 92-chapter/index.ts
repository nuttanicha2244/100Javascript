function handle(input: { email: string }|{ phone : string }) {
    if ('email' in input) {
       console.log(input.email);
    }else{
        console.log(input.phone);
    }
    }
