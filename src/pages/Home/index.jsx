/* eslint-disable react/no-unescaped-entities */

import { Package, Container, Title } from "./styles";
import { LinkAddition } from "../../components/LinkAddition";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { BiPlus } from "react-icons/bi";
import { useEffect, useState } from "react";



export function Home() {

    const [movies, setMovies] = useState([])
    // Recupere os dados do localStorage
    useEffect(() => {
        const saveMovies = JSON.parse(localStorage.getItem('MOVIES') || '[]')
        setMovies(saveMovies)
    }, [])

    return (
        <>
            <Header />

            <Container>
                <Title>
                    Meus filmes
                    <LinkAddition
                        to="/newmovies"
                        text="Adicionar"
                        icon={<BiPlus />}
                    />

                </Title>

                <Package>
                    {movies.map((movie, index) => {
                        console.log("Cade a tag", movie.tags[0])
                        return (
                            <Card
                                key={index}
                                title={movie.title}
                                icon={movie.rating}
                                paragraph={movie.description}
                                tags={movie.tags}
                            />
                        )


                    })}
                   
                </Package>

            </Container>
        </>

    )
}