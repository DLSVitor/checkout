#include <iostream>
using namespace std;

int main()
{
    setlocale(LC_ALL, "Portuguese");


	string nome;
	int idade,sexo,nota;
    float soma_idade = 0, somam=0, somaf=0;
    int m = 0, f = 0;
    float media_idade=0;
    float mediam = 0, mediaf = 0;
    string nomev, nomen, nome_melhor;
    int idadev = 0, idaden = 999;
    int sexov, sexon, sexo_melhor;
    int notav, notan;
    float nota_melhor = 0;
    int i=0;

    while (nome!="fim") {
        cout << "Informe o nome do aluno (digite 'fim' para encerrar): ";
        cin >> nome;
        
        if (nome == "Ze") {
        cout << "\nABRA�O Z�, TUDO DE BOM PRA TI!!\n\n" << endl;
    }

        if (nome == "fim")
            break;
            
        i++;

        cout << "Informe a idade do aluno: ";
        cin >> idade;

        cout << "Informe o sexo do aluno (1 - Masculino / 2 - Feminino): ";
        cin >> sexo;

        cout << "Informe a nota do aluno em estrutura de vetores: ";
        cin >> nota;
        

        soma_idade += idade;

        if (sexo == 1) {
            somam += nota;
            mediam = somam / ++m;
        } else if (sexo == 2) {
            somaf += nota;
            mediaf = somaf / ++f;
        }

        if (idade > idadev) {
            nomev = nome;
            idadev = idade;
            sexov = sexo;
            notav = nota;
        }

        if ( idade < idaden) {
            nomen = nome;
            idaden = idade;
            sexon = sexo;
            notan = nota;
        }

        if (nota > nota_melhor) {
            nota_melhor = nota;
            nome_melhor = nome;
            sexo_melhor = sexo;
        }
    }

    media_idade = soma_idade / i;

    cout << "\nA faixa et�ria da turma �: " << media_idade << endl;


    if (mediam > mediaf) {
        cout << "\nA maior m�dia � dos alunos de sexo masculino." << endl;
    } else if (mediam < mediaf) {
        cout << "\nA maior m�dia � das alunas de sexo feminino." << endl;
    } else {
        cout << "\nA m�dia entre os sexos masculino e feminino foi igual." << endl;
    }

    if (sexov == 1) {
        cout << "\nO aluno mais velho �: " << nomev << endl;
        cout << "Ele tem " << idadev << " anos" << endl;
        cout << "Ele � do sexo: Masculino" << endl;
        cout << "Sua nota �: " << notav << endl;
    } else if (sexov == 2) {
        cout << "\nA aluna mais velha �: " << nomev << endl;
        cout << "Ela tem " << idadev << " anos" << endl;
        cout << "Ela � do sexo: Feminino" << endl;
        cout << "Sua nota �: " << notav << endl;
    }

    if (sexon == 1) {
        cout << "\nO aluno mais novo �: " << nomen << endl;
        cout << "Ele tem " << idaden << " anos" << endl;
        cout << "Ele � do sexo: Masculino" << endl;
        cout << "Sua nota �: " << notan << endl;
    } else if (sexon == 2) {
        cout << "\nA aluna mais nova �: " << nomen << endl;
        cout << "Ela tem " << idaden << " anos" << endl;
        cout << "Ela � do sexo: Feminino" << endl;
        cout << "Sua nota �: " << notan << endl;
    }

    if (sexo_melhor == 1) {
        cout << "\n\nO melhor aluno � um homem, chamado " << nome_melhor << endl;
        cout << "Sua nota � " << nota_melhor << endl;
    } else if (sexo_melhor == 2) {
        cout << "\n\nA melhor aluna � uma mulher, chamada " << nome_melhor << endl;
        cout << "Sua nota � " << nota_melhor << endl;
    }

    return 0;
}
