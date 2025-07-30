type Lang ='en'|'th';
type FieldKey =`title_${Lang}`;

type Lables ={
    [K in Lang as `title_${K}`]: string;
}

