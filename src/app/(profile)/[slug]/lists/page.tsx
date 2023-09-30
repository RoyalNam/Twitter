import DefaultLayout from '@/app/defauLayout';
import ListCell from '@/components/Cells/ListCell';
import TrendCell from '@/components/Cells/TrendCell';
import ListBlock from '@/components/ListBlock';
import Search from '@/components/Search';
import UserList from '@/components/UserBlock';

const DATA = {
    src: 'https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/157757/Originals/2.jpg',
    name: 'V-Tuber!',
    numberFollow: 1.3,
    numberMember: 800,
    author: 'MrScottLads',
    groupSrc: [
        'https://blogchiasekienthuc.com/wp-content/uploads/2022/12/hinh-nen-may-tinh-fantasy-4k-blogchiasekienthuc.com-1-768x432.jpg',
        'https://blogchiasekienthuc.com/wp-content/uploads/2022/12/hinh-nen-may-tinh-fantasy-4k-blogchiasekienthuc.com-1.png',
        'https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/157757/Originals/2.jpg',
    ],
};
function List() {
    return (
        <DefaultLayout
            contentChildren={
                <ListBlock title="Discover new Lists">
                    <ListCell
                        src={DATA.src}
                        groupSrc={DATA.groupSrc}
                        name={DATA.name}
                        author={DATA.author}
                        numberFollow={DATA.numberFollow}
                        numberMember={DATA.numberMember}
                    />
                    <ListCell
                        src={DATA.src}
                        groupSrc={DATA.groupSrc}
                        name={DATA.name}
                        author={DATA.author}
                        numberFollow={DATA.numberFollow}
                        numberMember={DATA.numberMember}
                    />
                    <ListCell
                        src={DATA.src}
                        groupSrc={DATA.groupSrc}
                        name={DATA.name}
                        author={DATA.author}
                        numberFollow={DATA.numberFollow}
                        numberMember={DATA.numberMember}
                    />
                </ListBlock>
            }
            asideChildren={
                <div className="w-full">
                    <div className="mb-2 h-12 sticky w-full top-0">
                        <Search />
                    </div>
                    <ListBlock title="Trends for you">
                        <TrendCell />
                        <TrendCell />
                        <TrendCell />
                        <TrendCell />
                        <TrendCell />
                        <TrendCell />
                    </ListBlock>
                    <UserList />
                </div>
            }
        />
    );
}

export default List;
