import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getMovies} from "../../store/moviesReducers/action.js";
import {Col, Flex, Pagination, Row, Select} from "antd";
import styles from './Movies.module.css'
import {Link} from "react-router-dom";
const Movies = () => {
  const dispatch = useDispatch()
  const {movies} = useSelector(store => store.movies)
  const [page, setPage] = useState(1)
  const [sortBy,setSortBy] = useState('popularity.desc')


  useEffect(() => {
    dispatch(getMovies({page,sortBy}))
  }, [dispatch,page,sortBy]);


  return (
    <div className={styles.container}>
         <Flex align={"center"} justify={"space-between"}>
           <h1 className={styles.text}>All Movies</h1>
           <Select
             defaultValue={sortBy}
             style={{ width: 250 }}
             onChange={(value)=> setSortBy(value)}
             options={[
               { value: 'popularity.desc', label: 'Популярности (убывание)' },
               { value: 'popularity.asc', label: 'Популярности (возврастание)' },
               { value: 'revenue.desc', label: 'Сборы (убывание)' },
               { value: 'revenue.asc', label: 'Сборы (возврастание)'},
             ]}
           />
         </Flex>

          <Row gutter={[32, 24]}>
            {
              movies.rows.map((el,idx) =>(
                <Col className={styles.col} span={6} key={idx}>
                  <Link to={`/movie/${el.id}`} >
                  <img
                    style={styles.img}
                    src={el.poster_path ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${el.poster_path}` : 'https://previews.123rf.com/images/oculo/oculo2004/oculo200400003/143645399-no-image-available-icon.jpg'}
                    alt=""
                  />

                  <p className={styles.title}>{el.title}</p>
                  <p className={styles.date}>{el.release_date}</p>
                  </Link>
                </Col>
              ))
            }
          </Row>
      <Pagination
        current={page}
        rootClassName={styles.pagin}
        defaultCurrent={1}
        pageSize={20}
        total={10000}
        onChange={(pageNumber) =>{
          setPage(pageNumber)
        }}
       showSizeChanger={false}
      />
    </div>
  );
};

export default Movies;
